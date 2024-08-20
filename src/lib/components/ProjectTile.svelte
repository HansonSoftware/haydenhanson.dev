<script lang="ts">
  import type { ProjectMetadataAndSlug } from '../../types';

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
      <h3 class="mb-1 text-xl sm:text-2xl font-medium">
        {project.metadata.title}
      </h3>

      <p class="py-2 font-light">
        {project.metadata.summary}
      </p>

      <p class="mb-1 text-sm font-bold text-card-foreground">
        {'Built with ' +
          project.metadata.technologiesUsed.toString().replaceAll(',', ', ')}
      </p>
    </a>
    <!-- <a class="font-light text-card-foreground underline" {href}>Learn More</a> -->
  </div>
</article>
