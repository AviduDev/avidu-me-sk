export const prerender = true;

import { client } from '$lib/client';

export const load = async () => {
	const { projects, services } = await client.request(
		`query MyQuery {
			projects {
				name
				slug
                year
                type
                image
                publishedAt
                liveUrl
			}
            services {
                name
            }
    	}`
	);

	return {
		projects,
		services
	};
};