import type { ComponentType } from 'svelte';

// project metadata
export type MarkdownProject = {
	metadata: {
		title: string;
		imgUrl: string;
		completedAt: string;
		summary: string;
	};
	default: ComponentType;
};

export type ProjectMetadataAndSlug = {
	slug: string;
	metadata: MarkdownProject['metadata'];
};
