import type { MarkdownProject } from '../../../types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;

	const markdownProject: MarkdownProject = await import(`../../../projects/${slug}.md`);

	return {
		metadata: markdownProject.metadata,
		project: markdownProject.default
	};
};
