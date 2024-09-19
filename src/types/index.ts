import type { ComponentType } from 'svelte';

// project metadata
export type MarkdownProject = {
  metadata: {
    title: string;
    imgUrl: string;
    completedAt: string;
    orderId: number;
    technologiesUsed: string[];
    summary: string;
  };
  default: ComponentType;
};

export type ProjectMetadataAndSlug = {
  slug: string;
  metadata: MarkdownProject['metadata'];
};

// blogpost metadata
export type MarkdownPost = {
  metadata: {
    title: string;
    imgUrl: string;
    publishedAt: string;
    readTime: string;
    summary: string;
  };
  default: ComponentType;
};

export type MarkdownPostMetadataAndSlug = {
  slug: string;
  metadata: MarkdownPost['metadata'];
};
