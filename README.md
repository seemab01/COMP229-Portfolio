# Personal Portfolio (React + Vite)

COMP229 personal portfolio with six pages: Home, About, Projects, Education, Services and Contact.

## Run locally
```
npm install
npm run dev
```

## Editing content
Page content (name, projects, education, services, contact info) is written directly in each file inside `src/pages`.
Replace `public/resume.pdf` with your own resume and `public/images/profile.jpg` with your photo.

## Structure
- `src/components` - Navbar, Logo, Footer
- `src/pages` - one file per page
- `public` - images, resume, favicon

## Deploy
Build with `npm run build` (output in `dist`). Works on Vercel (`vercel.json`) and Netlify (`public/_redirects`).
