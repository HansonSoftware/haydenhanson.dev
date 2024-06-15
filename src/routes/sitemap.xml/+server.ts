export async function GET() {
  const xmlContent = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>https://haydenhanson.dev/</loc>
      </url>
      <url>
        <loc>https://haydenhanson.dev/blog/my-thinkpad-setup</loc>
      </url>
      <url>
        <loc>https://haydenhanson.dev/blog/automate-the-boring-stuff-review</loc>
      </url>
      <url>
        <loc>https://haydenhanson.dev/projects</loc>
      </url>
      <url>
        <loc>https://haydenhanson.dev/projects/job-application-board</loc>
      </url>
      <url>
        <loc>https://haydenhanson.dev/projects/code-snippets</loc>
      </url>
      <url>
        <loc>https://haydenhanson.dev/projects/twootr</loc>
      </url>
      <url>
        <loc>https://haydenhanson.dev/projects/pocket-recipes</loc>
      </url>
      <url>
        <loc>https://haydenhanson.dev/projects/taskman-shell</loc>
      </url>
      <url>
        <loc>https://haydenhanson.dev/projects/process-scheduler</loc>
      </url>
      <url>
        <loc>https://haydenhanson.dev/about</loc>
      </url>
      <url>
        <loc>https://haydenhanson.dev/contact</loc>
      </url>
      <url>
        <loc>https://haydenhanson.dev/rss.xml</loc>
      </url>
      <url>
        <loc>https://haydenhanson.dev/pgp.asc</loc>
      </url>
    </urlset>`.trim();

  return new Response(xmlContent, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
