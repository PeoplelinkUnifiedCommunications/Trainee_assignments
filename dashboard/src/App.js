import { useState } from "react";
import Body from "./containers/content";
import Header from "./containers/header";
import SideNav from "./containers/sideNav";
import data from "./containers/data.json";
import context from "./context/context";

function App() {
	const [contextData, setContextData] = useState(data);

	const onClickNav = (id) => {
		const modifiedData = contextData.map((each) => {
			if (each.navId === id) {
				return { ...each, isActiveCard: true };
			} else {
				return { ...each, isActiveCard: false };
			}
		});

		setContextData(modifiedData);
	};

	return (
		<context.Provider
			value={{
				dataList: contextData,
				onClickNav: onClickNav,
			}}>
			<div className='baseCntr'>
				<Header />
				<div className='mainCntr'>
					<SideNav />
					<Body />
				</div>
			</div>
		</context.Provider>
	);
}

export default App;
