import { defineConfig } from 'vite';
import pozitronPlugin from 'vite-plugin-pozitron';
/* const pozitronPlugin = import('vite-plugin-pozitron').then(
	(r) => r.default
); */

// throw new Error(JSON.stringify(pozitronPlugin, null, 4));

export default defineConfig({
	plugins: [pozitronPlugin()],
	server: {
		port: 3000,
	},
	build: {
		polyfillModulePreload: false,
	},
});