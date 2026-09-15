import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  // It replaces /functions/v1/preview-site but it might not be perfect
  let path = url.pathname.substring('/functions/v1/preview-site'.length);

  // Handle paths under `/aeo_landing` since the links will point to `/aeo_landing/...`
  if (path.startsWith('/aeo_landing')) {
    path = path.substring('/aeo_landing'.length);
  }

  if (path === '' || path === '/' || path.endsWith('/')) {
    path = path + 'index.html';
  }

  if (path.startsWith('/')) {
    path = path.substring(1);
  }

  const targetUrl = `https://lgdlxzwwevykxoehbbae.supabase.co/storage/v1/object/public/site/${path}`;
  let res = await fetch(targetUrl);

  if (res.status === 404 && !path.endsWith('.html') && !path.endsWith('/')) {
    // e.g. `/about` -> `/about/index.html`
    const retryUrl = `https://lgdlxzwwevykxoehbbae.supabase.co/storage/v1/object/public/site/${path}/index.html`;
    const retryRes = await fetch(retryUrl);
    if (retryRes.status === 200) {
      res = retryRes;
    }
  }

  if (res.status !== 200) {
    // Try just fallback index if it's still 404 just in case
    if (path.endsWith('index.html')) {
      return new Response(`<html><body><h1>Error ${res.status} Fetching target URL ${targetUrl}</h1></body></html>`, {
        status: 404,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
    return new Response(`Not found`, { status: 404 });
  }

  const newHeaders = new Headers(res.headers);
  newHeaders.set('Connection', 'keep-alive');

  if (path.endsWith('.html')) {
    newHeaders.set('Content-Type', 'text/html; charset=utf-8');
  }

  const contentType = newHeaders.get('content-type') || '';
  if (contentType.includes('text/html')) {
    let html = await res.text();
    html = html.replace(/\/aeo_landing\//g, '/functions/v1/preview-site/aeo_landing/');
    return new Response(html, {
      headers: newHeaders,
      status: res.status,
    });
  }

  const body = await res.arrayBuffer();

  return new Response(body, {
    headers: newHeaders,
    status: res.status,
  });
});
