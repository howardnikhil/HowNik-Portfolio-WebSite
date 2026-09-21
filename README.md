# hownik.in — Howard Nikhil's Personal Technology Lab & Engineering Portfolio

This repository contains the complete codebase for [hownik.in](https://hownik.in/), the personal engineering portfolio and technology laboratory of **Howard Nikhil**.

## Positioning & Central Narrative
> **Entrepreneur · Engineer · Technology Builder**  
> *"I build ideas into real products — from code to hardware, from CAD to fabrication."*

## Architectural Overview
- **Zero-Dependency Stack**: Built strictly with semantic HTML5, modern vanilla CSS (Grid, Flexbox, Custom Properties), and modular vanilla JavaScript.
- **Aesthetic Synthesis**: Unites Apple-like typographical restraint and cleanliness with SpaceX / Tesla aerospace engineering seriousness (subtle coordinate telemetry, dark matte surfaces, hairline borders, and subdued technical accents).
- **Theme Engine**: Dark mode by default with a high-contrast, polished Light mode toggle. Preferences automatically persist via `localStorage`.
- **Dynamic Capabilities & Hardware Evidence**: Showcases verified work across legged robotics, custom wearable optics, UWB indoor RF positioning, open-source distributed robotics middleware (NeuronRT), and deep learning computer vision.
- **Interactive Modals**: Includes an interactive resume overlay with quick-print formatting and a high-resolution certificate inspection lightbox.

## Directory Structure
```
├── index.html                   # Semantic, accessible single-page layout
├── CNAME                        # hownik.in
├── README.md                    # Project documentation
├── css/
│   ├── style.css                # Design tokens, typography, layouts, components
│   └── responsive.css           # Viewport breakpoints for mobile, tablet, and widescreen
├── js/
│   ├── data.js                  # Structured factual data (projects, experiences, awards)
│   ├── animations.js            # Scroll reveals, technical telemetry canvas
│   └── main.js                  # Navigation, theme toggle, interactive resume, lightbox
└── assets/
    └── images/                  # Strategic CAD renders, portrait, certificates, favicon
```

## Deployment
This project is configured for GitHub Pages with the custom domain `hownik.in` via the root `CNAME` record. No build steps or bundlers required.
