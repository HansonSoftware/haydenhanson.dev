import type { LayoutLoad } from './$types';

// prerender all pages during build time
export const prerender = true;

// get url path whenever visiting a new page
export const load: LayoutLoad = ({ url }) => {
	return {
		pathname: url.pathname
	};
};
