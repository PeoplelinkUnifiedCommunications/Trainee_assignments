import React, { useState, useMemo,useEffect } from "react";

const App = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	
  const calculation = useEffect(() => {
    console.log("useEffect");
		return expensiveCalculation(count);
	}, [count]);

  const calculation2 = useMemo(() => {
    console.log("useMemo")
		return expensiveCalculation(count);
	}, [count]);

	const increment = () => {
		setCount(count => count + 1);
	};
	const addTodo = () => {
		setTodos(t => [...t, "New Todo"]);
	};

	return (
		<div>
			<div>
				<h2>My Todos</h2>
				{todos.map((todo, index) => {
					return <p key={index}>{todo}</p>;
				})}
				<button onClick={addTodo}>Add Todo</button>
			</div>
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
				<h2>Expensive Calculation</h2>
				{calculation}
        {calculation2}
			</div>
		</div>
	);
};

const expensiveCalculation = num => {
	console.log("Calculating...");

	for (let i = 0; i < 10; i++) {
		num += 1;
		console.log("hi");
	}
	return num;
};

export default App;