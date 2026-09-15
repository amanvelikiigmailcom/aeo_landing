import "jsr:@supabase/functions-js/edge-runtime.d.ts";

Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  const path = url.pathname.replace('/functions/v1/preview-site', '');

  return new Response("<html><body><h1>Site is being built and deployed to GitHub Pages! Please check back in a few minutes. (Once Github actions finishes)</h1></body></html>", {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      Connection: 'keep-alive',
    },
  });
});
