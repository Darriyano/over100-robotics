import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:8000', // Backend API URL
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			}
		}
	}
});
