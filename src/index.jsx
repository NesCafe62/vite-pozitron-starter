/* @refresh reload */
import { render } from 'pozitron-js/render';

import './styles.css';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error('#root element not found');
}

render(App, root);