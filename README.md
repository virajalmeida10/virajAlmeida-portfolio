# Viraj Almeida — Portfolio Website

Personal portfolio website for Viraj Almeida, Data Engineer & Analytics Architect.

## Tech Stack

- **React 18** + **Vite 5** — fast, modern frontend tooling
- **Tailwind CSS v3** — utility-first styling
- **Custom CSS** — glassmorphism cards, particle canvas, scroll animations
- **Google Fonts** — Space Mono (headings/labels) + Inter (body)
- No external UI libraries

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
virajAlmeida-portfolio/
├── index.html                    # Entry HTML, Google Fonts link
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx                  # React root mount
    ├── App.jsx                   # Root app + IntersectionObserver scroll animations
    ├── styles/
    │   └── globals.css           # All CSS: variables, glassmorphism, animations
    └── components/
        ├── Navbar.jsx            # Fixed frosted-glass nav + mobile overlay menu
        ├── Hero.jsx              # Canvas particle animation + typewriter effect
        ├── About.jsx             # Bio, stats, photo placeholder
        ├── Skills.jsx            # Skill group glass cards with pill badges
        ├── Experience.jsx        # Alternating timeline (3 roles)
        ├── AIAutomation.jsx      # AI & agentic systems section
        ├── Projects.jsx          # 2-column project card grid (4 projects)
        ├── IndustryExperience.jsx # 2x3 industry tiles
        ├── Education.jsx         # 2 education cards
        ├── Contact.jsx           # Social links + contact form with success state
        └── Footer.jsx            # Minimal footer with nav links
```

## Customization TODOs

Before deploying, replace all placeholder content marked with `// TODO` comments:

1. **Profile photo** — `src/components/About.jsx`
   - Replace the `<span class="about-initials">VA</span>` block with a real `<img>` tag
   - Place photo at `public/assets/viraj-almeida.jpg`

2. **LinkedIn URL** — `src/components/Contact.jsx`
   - Replace `href="#"` with your actual LinkedIn profile URL

3. **GitHub URL** — `src/components/Contact.jsx`
   - Replace `href="#"` with your actual GitHub profile URL

4. **Project GitHub/demo links** — `src/components/Projects.jsx`
   - Update `githubUrl` and `externalUrl` for each project

## Design System

| Token | Value |
|-------|-------|
| Background | `#0a0a0f` |
| Background alt | `#0c0c14` |
| Accent | `#00D4FF` |
| Text primary | `#e8edf3` |
| Text secondary | `#8892a4` |
| Heading font | Space Mono |
| Body font | Inter |

## Deployment

The build outputs to `dist/`. Deploy to any static host:

- **Vercel**: connect GitHub repo, auto-detected as a Vite project
- **Netlify**: `npm run build`, publish the `dist/` folder
- **GitHub Pages**: use the `gh-pages` package with `base: '/repo-name/'` in `vite.config.js`
