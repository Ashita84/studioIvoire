# Studio Ivoire · Next.js + Tailwind (v2)

**What's new**
- Global nav (Home · Shop · About · Journal)
- **Shop** page with filters (category, search, sort)
- **About** page & **Journal** (list + dynamic post route)
- Email subscribe **API** (/api/subscribe) – mocked; add your ESP creds

## Quick start
1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000

## Hook up your Email provider
Edit `app/api/subscribe/route.ts` and plug in Mailchimp/ConvertKit/Klaviyo. Add env vars and restart.

## Images
Drop your images in `/public`: hero.jpg, porcelain.jpg, leather.jpg, linen.jpg, jewelry.jpg, shoehorn.jpg
