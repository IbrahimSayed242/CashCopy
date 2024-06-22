// All redirects

export async function onRequest(context, next) {
  const { request } = context;
  const url = new URL(request.url);

  // Check if the path starts with '/astro/'
  if (url.pathname.startsWith('/astro/')) {
    // Extract the part of the path after '/astro/'
    const newPath = url.pathname.replace('/astro', '');

    // Extract query parameters
    const searchParams = url.searchParams;

    // Construct the new URL
    const newUrl = new URL(request.url);
    newUrl.pathname = newPath;
    newUrl.search = searchParams.toString();

    // Redirect to the new URL with the same query parameters
    return new Response(null, {
      status: 302,
      headers: {
        Location: newUrl.toString()
      }
    });
  }

  // If the path doesn't match, continue with the request
  return next();
}
