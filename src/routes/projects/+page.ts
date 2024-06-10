import type { ProjectMetadataAndSlug } from '../../types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	// get projects from api with sveltekit fetch
	const response = await fetch('/api/projects');

	// get projects from response
	const projects: ProjectMetadataAndSlug[] = await response.json();

	return {
		projects
	};
};
