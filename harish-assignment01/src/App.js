import ListContext from "./Context/ListContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormContainer from "./FormContainer/index";
import ListView from "./ListView";
import { useState } from "react";

import "./App.css";

const App = () => {
	const [list, setlist] = useState([]);

	const addList = data => {
		setlist(prevState => [...prevState, data]);
	};

	return (
		<ListContext.Provider value={{ list, addList: addList }}>
			<BrowserRouter>
				<Switch>
					<Route path="/Create" component={FormContainer} />
					<Route path="/" component={ListView} />
				</Switch>
			</BrowserRouter>
		</ListContext.Provider>
	);
};

export default App;
