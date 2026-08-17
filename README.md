# W02 — Login State Desk Pakistan — Review Build v1

Status: REVIEW BUILD — NOINDEX

## Deploy target
Railway Static Hosting.

Railway's current static-hosting guide recommends deploying from a GitHub repository. Upload the *contents* of this folder to a GitHub repository, then choose **Deploy from GitHub repo** in Railway.

Suggested repository / project name:
`login-state-desk-pakistan-w02`

After deployment, generate a public Railway domain and send the live review URL back for desktop/mobile QA.

## Review safeguards
- Every HTML route contains `noindex,nofollow,noarchive`.
- Root `robots.txt` blocks all crawling.
- No production sitemap exists at the root.
- Contact form is disabled.
- No Google Search Console verification is included.
- Canonicals and production JSON-LD wait until the final host is known.

## Routes
/
 /about/
 /contact/
 /privacy/
 /terms/
 /disclaimer/
 /editorial-policy/
 /responsible-use/

## Locked links
- One contextual money-site link on the homepage:
  https://betpro-id.pk/betpro-id-login
- Zero money-site links on support/legal routes.
- One floating WhatsApp control on every HTML route:
  https://sportsids.com/NewID

Do not switch to production indexing before live visual QA and form testing.
