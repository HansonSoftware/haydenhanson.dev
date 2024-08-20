import type {
  MarkdownProject,
  ProjectMetadataAndSlug
} from '../../../types/index.ts';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  // use vite glob import to get all project write-ups
  const markdownProjectModules = import.meta.glob('/src/projects/*') as Record<
    string,
    () => Promise<MarkdownProject>
  >;

  const projectPromises: Promise<ProjectMetadataAndSlug>[] = [];

  for (const path in markdownProjectModules) {
    const loadMarkdownProjectModule = markdownProjectModules[path];

    const loadProjectSlugAndMetadata = async function () {
      // dynamically import markdown project
      const markdownProjectModule = await loadMarkdownProjectModule();

      // slug is everything after last / without the file extension
      const slug = path.slice(path.lastIndexOf('/') + 1).replace('.md', '');

      return {
        slug,
        metadata: markdownProjectModule.metadata
      };
    };

    projectPromises.push(loadProjectSlugAndMetadata());
  }

  // load all projects concurrently
  const projects = await Promise.all(projectPromises);

  const sortedProjects = projects.sort((project1, project2) => {
    return project1.metadata.orderId - project2.metadata.orderId;
  });

  return json(sortedProjects);
};
