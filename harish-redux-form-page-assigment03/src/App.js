import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormContainer from "./FormContainer/index";
import ListView from "./ListView";

import { createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./raducer/reducer";

import "./App.css";

const store = createStore(appReducer);

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
