// Newsletter signup -> EmailOctopus (v2). Secrets: EMAILOCTOPUS_API_KEY, EMAILOCTOPUS_LIST_ID.
const API = 'https://api.emailoctopus.com';
const LANGS = ['it', 'en', 'es', 'fr'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function eo(env, doFetch, method, path, body) {
  const res = await doFetch(API + path, {
    method,
    headers: { Authorization: 'Bearer ' + env.EMAILOCTOPUS_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res;
}

async function subscribe(payload, env, doFetch) {
  if (!env.EMAILOCTOPUS_API_KEY || !env.EMAILOCTOPUS_LIST_ID) return { status: 500, json: { error: 'config' } };
  if (payload.company) return { status: 200, json: { ok: true } }; // honeypot
  const email = String(payload.email || '').trim();
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) return { status: 400, json: { error: 'invalid_email' } };

  const tags = { sito: true };
  if (LANGS.includes(payload.lang)) tags[payload.lang] = true;
  const path = '/lists/' + encodeURIComponent(env.EMAILOCTOPUS_LIST_ID) + '/contacts';
  const put = () => eo(env, doFetch, 'PUT', path, { email_address: email, tags });

  let res = await put();
  if (res.status >= 400 && res.status < 500 && res.status !== 409 && res.status !== 429) {
    const j = await res.json().catch(() => ({}));
    const onEmail = JSON.stringify(j).includes('email_address');
    if (onEmail) return { status: 400, json: { error: 'invalid_email' } };
    // tags may not exist yet on the list: create them, then retry once
    for (const t of Object.keys(tags)) {
      await eo(env, doFetch, 'POST', '/lists/' + encodeURIComponent(env.EMAILOCTOPUS_LIST_ID) + '/tags', { tag: t });
    }
    res = await put();
  }
  if (res.ok || res.status === 409) return { status: 200, json: { ok: true } };
  return { status: 502, json: { error: 'upstream' } };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/subscribe') return env.ASSETS.fetch(request);
    const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };
    if (request.method !== 'POST') return new Response('{"error":"method"}', { status: 405, headers });
    const origin = request.headers.get('Origin');
    if (origin && new URL(origin).host !== url.host) return new Response('{"error":"origin"}', { status: 403, headers });
    let payload;
    try { payload = await request.json(); } catch (e) { return new Response('{"error":"bad_request"}', { status: 400, headers }); }
    const out = await subscribe(payload || {}, env, fetch);
    return new Response(JSON.stringify(out.json), { status: out.status, headers });
  },
};
