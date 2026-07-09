import type {APIRoute} from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({cookies, redirect}) => {
  // Clear the preview cookie
  cookies.delete('preview', {
    path: '/',
  });

  // Redirect to homepage
  return redirect('/');
};
