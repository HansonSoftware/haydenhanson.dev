import type { RequestHandler } from '@sveltejs/kit';
import type { MarkdownPostMetadataAndSlug } from '../../../types';

export const GET: RequestHandler = async ({ fetch }) => {
  try {
    const response = await fetch('/api/blog');

    const posts: MarkdownPostMetadataAndSlug[] = await response.json();

    const rss = render(posts);

    const rssResponse = new Response(rss, {
      headers: {
        'Cache-Control': `max-age=0, s-max-age=${600}`,
        'Content-Type': 'application/xml'
      }
    });

    return rssResponse;
  } catch (error) {
    console.error('Error fetching or rendering RSS feed:', error);

    return new Response('Internal Server Error', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }
};

const render = (posts: MarkdownPostMetadataAndSlug[]): string => {
  return `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <atom:link href="http://www.haydenhanson.dev/rss" rel="self" type="application/rss+xml" />
        <title>Hayden Hanson | Blog</title>
        <link>https://www.haydenhanson.dev</link>
        <description>Latest posts from Hayden Hanson's blog</description>
        ${posts
          .map(
            (post) => `
          <item>
            <guid>https://www.haydenhanson.dev/posts/${post.slug}</guid>
            <title>${post.metadata.title}</title>
            <link>https://www.haydenhanson.dev/posts/${post.slug}</link>
            <description>${post.metadata.summary}</description>
            <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
          </item>`
          )
          .join('')}
      </channel>
    </rss>`;
};
