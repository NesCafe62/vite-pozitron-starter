/* @refresh reload */
import { render } from 'pozitron-js/render';
import App from './App';

const root = document.getElementById('app');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error('#app element not found');
}

render(App, root);