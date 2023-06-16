import { signal } from 'pozitron-js';
import { h as _h, $fragment } from 'pozitron-js/render';

function h(type, propsArg, ...children) {
	const props = {};
	let events;
	for (let prop in propsArg) {
		const value = propsArg[prop];
		if (prop.startsWith('on')) {
			if (!events) {
				props.on = events = {};
			}
			events[prop.slice(2).toLowerCase()] = value;
			continue;
		}
		props[prop] = value;
	}
	return _h(type, props, children);
}

function Fragment(f) {
	return $fragment(f.children);
}

function App() {
    const [count, setCount] = signal(0);

	function increment() {
		setCount(count() + 1);
	}

	return (
		<>
			<span>Count: {count}</span><br/>
			<button onClick={increment}>Increment</button>
		</>
	);
}

export default App;