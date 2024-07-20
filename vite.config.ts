import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import vercel from 'vite-plugin-vercel'


export default defineConfig({
	define: {
		__APP_ENV__: process.env.VITE_VERCEL_ENV
	},
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api': {
				target: process.env.VITE_API_URL, // Backend API URL
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
});


