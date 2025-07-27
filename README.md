# Resume Profile

This repository contains a simple React application for an interactive résumé.  The project is built with [Vite](https://vitejs.dev/) and styled with [Tailwind CSS](https://tailwindcss.com/).  It showcases a digital profile with an image upload feature and a detailed list of work experience, education, certifications, awards and skills.

## Project Structure

```
.
├── index.html            # HTML entry point
├── package.json          # Project metadata and dependencies
├── postcss.config.js     # PostCSS configuration for Tailwind
├── tailwind.config.js    # Tailwind custom configuration
├── vite.config.js        # Vite build configuration
├── src/                  # Application source code
│   ├── App.jsx           # Top-level app component
│   ├── ResumeProfile.js  # Main résumé component
│   ├── index.css         # Tailwind directives
│   └── main.jsx          # Application entry script
└── src/assets/           # Static assets (e.g. profile image)
```

## Getting Started

To run the project locally, follow these steps:

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

   This will start a local server and open the application in your default web browser.  The server reloads automatically when you make changes to the source files.

3. **Build for production**

   To create an optimized production build, run:

   ```bash
   npm run build
   ```

   The build output will be generated in the `dist/` directory.

## Deploying to Netlify

Netlify can automatically build and deploy this project from your Git repository.  After pushing the repository to GitHub:

1. Log in to your Netlify account and click **“New Site from Git”**.
2. Choose GitHub as the provider and select the repository.
3. In the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **“Deploy Site”**.  Netlify will install dependencies, build the project, and host the static output.

Alternatively, you can use the Netlify CLI to deploy manually:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## License

This project is provided without a license.  You may modify and use it for personal or educational purposes.