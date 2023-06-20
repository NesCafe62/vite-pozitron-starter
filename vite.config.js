import { defineConfig } from 'vite';
import pozitronPlugin from './src/vite-plugin-pozitron';

export default defineConfig({
	plugins: [pozitronPlugin()],
	server: {
		port: 3000,
	},
	build: {
		polyfillModulePreload: false,
	},
});