import { Routes, Route, BrowserRouter } from "react-router-dom";
import FormData from "./components/FormData";
import Form from "./components/Form";
import context from "./context/listContext";

import "./App.css";
import { useState } from "react";

const App = () => {
	const [dataList, setDataList] = useState([]);

	const onSubmitForm = (newData) => {
		if (dataList.length === 0) {
			setDataList([newData]);
		} else {
			const updatedData = [...dataList, newData];
			setDataList(updatedData);
		}
	};

	return (
		<context.Provider
			value={{
				dataList,
				onSubmitForm: onSubmitForm,
			}}>
			<>
				<BrowserRouter>
					<Routes>
						<Route exact path='/' element={<FormData />} />
						<Route exact path='/form' element={<Form />} />
					</Routes>
				</BrowserRouter>
			</>
		</context.Provider>
	);
};
export default App;
