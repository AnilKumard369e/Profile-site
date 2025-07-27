import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Resume Profile project
// Enables the React plugin so that JSX and Fast Refresh work out of the box.
export default defineConfig({
  plugins: [react()],
  base: './',	
});
