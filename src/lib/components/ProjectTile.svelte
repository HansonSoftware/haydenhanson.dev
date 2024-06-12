<script lang="ts">
  import type { ProjectMetadataAndSlug } from '../../types';
  import { formatDate } from '$lib/utils/date';

  export let project: ProjectMetadataAndSlug;

  const href = `/projects/${project.slug}`;
</script>

<article class="p-4 sm:flex sm:space-x-4">
  <a {href} class="block sm:w-80">
    <div class="aspect-h-9 aspect-w-16 overflow-hidden rounded-md">
      <img
        src={project.metadata.imgUrl}
        alt={project.metadata.title}
        class="object-fit"
      />
    </div>
  </a>

  <div class="flex-1 py-2 sm:py-0">
    <a {href}>
      <h3 class="mb-1 text-xl font-medium">
        {project.metadata.title}
      </h3>
      <p class="text-gray-60 font-light dark:text-gray-300">
        <span>Completed on: </span>
        <time datetime={project.metadata.completedAt}>
          {formatDate(project.metadata.completedAt)}
        </time>
      </p>

      <p class="py-2 font-light">
        {project.metadata.summary}
      </p>
    </a>

    <div
      class="flex space-x-4 font-light text-gray-600 underline
          dark:text-gray-300"
    >
      <a {href}>Read More</a>
    </div>
  </div>
</article>
