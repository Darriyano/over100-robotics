import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL)
	},
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
