// redirect.astro

// Redirects
export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
  
    if (url.pathname.startsWith('/astro/')) {
      const newPath = url.pathname.replace('/astro/', '/');
      const newUrl = `${newPath}${url.search}`;
      
      return new Response(null, {
        status: 302,
        headers: {
          Location: newUrl,
        },
      });
    }
  
    return context.next();
  }
  