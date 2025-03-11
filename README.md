# Modern Web Developer Portfolio

A professional, responsive portfolio website built with Next.js, Tailwind CSS, and shadcn/ui components. Perfect for web developers to showcase their skills, projects, and experience.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive across all devices
- 🔍 SEO optimized structure
- 🚀 Fast performance with Next.js
- 💾 Data-driven approach with JSON configuration
- 🧩 Beautiful UI components from shadcn/ui
- 🌙 Light and dark mode support

## Technologies Used

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Deployment**: Ready for Vercel or similar platforms

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

All personal information is stored in the `src/data/portfolio-data.json` file, making it easy to update without touching the code.

### JSON Data Structure

- **basics**: Personal information, contact details, and social media links
- **skills**: Technical skills categorized by type
- **education**: Academic background and certifications
- **experience**: Work history and professional experience
- **projects**: Portfolio projects with descriptions and links
- **testimonials**: Recommendations from colleagues and clients
- **interests**: Personal interests and hobbies
- **languages**: Languages spoken and proficiency levels

### Adding Profile Images

Place your profile images in the `public/images/` directory.

## Project Structure

```
portfolio/
├── public/              # Static assets
│   └── images/          # Image files used throughout the site
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components
│   │   ├── about/       # About section components
│   │   ├── experience/  # Experience section components
│   │   ├── header/      # Header and navigation components
│   │   ├── hero/        # Hero section components
│   │   ├── layout/      # Layout components
│   │   ├── projects/    # Project showcase components
│   │   ├── skills/      # Skills display components
│   │   ├── testimonials/# Testimonials components
│   │   ├── ui/          # shadcn/ui components
│   ├── data/            # Data files
│   │   └── portfolio-data.json  # Personal information
│   └── lib/             # Utility functions
└── tailwind.config.js   # Tailwind configuration
```

## Deployment

This portfolio template is ready to be deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/portfolio)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Icons: Various SVG icons
- Images: Replace with your own images
