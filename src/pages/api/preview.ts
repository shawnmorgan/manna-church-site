import type {APIRoute} from 'astro';

export const GET: APIRoute = async ({cookies, redirect, url}) => {
  // Get the redirect path from query params
  const path = url.searchParams.get('redirect') || '/';

  // Set a cookie to enable preview mode
  // Use sameSite: 'none' and secure: true for iframe compatibility
  cookies.set('preview', 'true', {
    path: '/',
    httpOnly: false, // Must be false for client-side JS to read it
    sameSite: 'none',
    secure: true,
    maxAge: 60 * 60, // 1 hour
  });

  // Redirect to the requested page
  return redirect(path);
};
