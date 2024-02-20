import { signal } from 'pozitron-js';

function Counter() {
	const [count, setCount] = signal(0);

	function increment() {
		setCount(count() + 1);
	}

	return (
		<button onClick={increment}>Count: {count}</button>
	);
}

function App() {
	return (
		<Counter></Counter>
	);
}

export default App;
