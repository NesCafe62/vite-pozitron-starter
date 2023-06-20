import { defineConfig } from 'vite';
import pozitronPlugin from 'vite-plugin-pozitron';

export default defineConfig({
	plugins: [pozitronPlugin()],
	server: {
		port: 3000,
	},
	build: {
		polyfillModulePreload: false,
	},
});