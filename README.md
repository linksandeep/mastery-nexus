# Full Data Analyst Landing Page — Next.js

A complete frontend recreation based on the supplied long-page screenshots.

## Included

- Desktop, tablet and mobile layouts
- Initial transparent/expanded header and compact white header after scrolling
- Full hero section with responsive enquiry form
- Testimonials carousel with arrows and progress dots
- Three career-outcome cards
- Repeated mid-page and lower-page enquiry forms
- Trust/review strip
- Dark “Why learn with us?” section
- Student testimonial video card and full footer
- Floating enquiry action
- A scroll-reactive light-green SVG ribbon: it draws forward while scrolling down and reverses while scrolling up
- Reduced-motion accessibility support

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to your live domain in your hosting environment so social preview URLs resolve correctly.

## Main files

- `components/LandingPage.tsx`: page structure, form behaviour, carousel and scroll state
- `app/globals.css`: all styling and responsive breakpoints
- `app/page.tsx`: Next.js route entry

## Connecting the forms

The forms currently prevent the browser submission, read the values with `FormData`, log the payload, and display a success message. Replace `handleSubmit` inside `EnquiryForm` with your API/CRM request.

## Images and claims

The demo uses remote Unsplash images. Replace them with your own licensed assets before launch. Salary, employment-success, student-number and accreditation statements are demonstration content copied from the visual brief; publish only claims your organisation can substantiate.
