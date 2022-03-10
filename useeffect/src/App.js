import React, { useState, useEffect } from "react";
import ListItem from "./components/ListItem";

import axios from "axios";
import "./App.css";

// Only loads the YouTube player

function App() {
	const [dataList, setData] = useState([]);
	useEffect(() => {
		const url = "https://jsonplaceholder.typicode.com/posts?limit=5";
		axios.get(url).then((resp) => setData(resp.data));
	}, []);
	console.log(dataList);
	return (
		<div className='App'>
			<div className='appointments-list'>
				<h1>Fetch API's calls Using useEffect</h1>
				<ul className='un-order'>
					<li className='list-item'>
						<h1 className='item'>ID</h1>
						<h1>Title</h1>
					</li>

					{dataList &&
						dataList.map((each) => <ListItem key={each.id} List={each} />)}
				</ul>
			</div>
		</div>
	);
}

export default App;
