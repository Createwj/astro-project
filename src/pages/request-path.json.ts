import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ params, request }) => {

const response = await fetch('https://randomuser.me/api/');
  return {
    body: JSON.stringify(await response.json())
  };
}