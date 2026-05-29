/**
 * Construit une URL absolue du site avec trailing slash garanti.
 *
 * Netlify sert les pages SSG depuis dist/<path>/index.html.
 * Sans trailing slash, il redirige 301 → avec trailing slash.
 * Ce helper élimine ces redirections en normalisant toutes les URLs.
 *
 * @example
 * siteUrl('/a-propos')        // "https://leveilmental.fr/a-propos/"
 * siteUrl('/blog/mon-slug')   // "https://leveilmental.fr/blog/mon-slug/"
 * siteUrl('/')                // "https://leveilmental.fr/"
 * siteUrl()                   // "https://leveilmental.fr/"
 */

const RAW = import.meta.env.VITE_SITE_URL || 'https://leveilmental.fr';
const BASE = RAW.replace(/\/$/, '');  // strip trailing slash from env var

export function siteUrl(path: string = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (p === '/') return `${BASE}/`;
  // Preserve query strings and fragments
  const hashIdx = p.indexOf('#');
  const queryIdx = p.indexOf('?');
  const splitIdx = hashIdx >= 0 ? (queryIdx >= 0 ? Math.min(hashIdx, queryIdx) : hashIdx)
                 : queryIdx >= 0 ? queryIdx
                 : -1;

  if (splitIdx < 0) {
    // Simple path — just ensure trailing slash
    return `${BASE}${p.endsWith('/') ? p : `${p}/`}`;
  }
  // Path has fragment or query — insert slash before it if needed
  const pathPart = p.slice(0, splitIdx);
  const suffix = p.slice(splitIdx);
  return `${BASE}${pathPart.endsWith('/') ? pathPart : `${pathPart}/`}${suffix}`;
}

/** Bare base URL without trailing slash — for cases where you need `${SITE}/path` */
export const SITE_BASE = BASE;
