export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Max-Age': '86400',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    if (url.pathname === '/config') {
      return Response.json(
        { apiKey: env.ZOOM_API_KEY },
        { headers: { ...corsHeaders, 'Cache-Control': 'no-store' } }
      );
    }

    return new Response('Not found', { status: 404 });
  },
};
