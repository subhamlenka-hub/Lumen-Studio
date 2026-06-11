# Lumen Studio — Single Page Website

A clean, single-page website built with plain **HTML, CSS, jQuery, Bootstrap 5, Swiper, and Fancybox**. No frameworks, no build step — just open `index.html` in a browser.

## Tech used
- **Bootstrap 5** — layout & responsive grid (via CDN)
- **Bootstrap Icons** — icons (via CDN)
- **jQuery 3.7** — DOM, smooth scroll, navbar shrink, form validation
- **Swiper 11** — testimonial slider
- **Fancybox 5** — portfolio image lightbox
- **Custom CSS** — animations (reveal-on-scroll, pulse, bounce, hover effects)
- **Google Fonts** — Playfair Display + Inter

## Folder structure
```
intern-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── hero.jpg
    ├── about.jpg
    ├── work1.jpg ... work6.jpg
    └── person1.jpg ... person3.jpg
```

## Sections
1. Sticky navbar (shrinks on scroll)
2. Hero with stats
3. About + image badge
4. Services grid (6 cards, hover animation)
5. Portfolio grid (Fancybox lightbox)
6. Testimonials (Swiper carousel, autoplay)
7. Contact form (jQuery validation)
8. Footer

## How to run
Just open `index.html` in any browser — no server required.
(For best results during dev, use VS Code Live Server.)

## Good practice tasks for interns
- Replace placeholder text and images with real content
- Hook the contact form to a real backend (PHP, Node, or Formspree)
- Add more portfolio items
- Customize colors in `:root` inside `css/style.css`
