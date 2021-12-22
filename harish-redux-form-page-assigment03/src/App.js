import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormContainer from "./FormContainer/index";
import ListView from "./ListView";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./raducer/combainedReducer";

import "./App.css";

const store = createStore(reducer);

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path="/Create" component={FormContainer} />
					<Route path="/" component={ListView} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
