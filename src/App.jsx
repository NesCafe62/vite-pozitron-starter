import { signal } from 'pozitron-js';
import { h } from 'pozitron-js/render';

function App() {
    const [count, setCount] = signal(0);

	function increment() {
		setCount(count() + 1);
	}

	return (
		<>
			<button onClick={increment}>Count: {count}</button>
		</>
	);
}

export default App;