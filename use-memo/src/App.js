import React, { useState, useMemo } from "react";

const App = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);
	var [c, setc] = useState(0);
	expensiveCalculation(c);
	const calculation = useMemo(() => {
		return expensiveCalculation(count);
	}, [count]);

	const increment = () => {
		setCount(count => count + 1);
	};
	const addTodo = () => {
		setTodos(t => [...t, "New Todo"]);
	};

	const changec = () => {
		setc(c => c + 1);
	};

	return (
		<div>
			<div>
				<h2>My Todos</h2>
				{todos.map((todo, index) => {
					return <p key={index}>{todo}</p>;
				})}
				<button onClick={addTodo}>Add Todo</button>
				<button onClick={changec}>Change</button>
			</div>
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
				<h2>Expensive Calculation</h2>
				{calculation}
			</div>
		</div>
	);
};

const expensiveCalculation = num => {
	console.log("Calculating...");
	console.log(num);
	for (let i = 0; i < 10; i++) {
		num += 1;
		console.log("hi");
	}
	return num;
};

export default App;
