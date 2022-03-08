import React from "react";

const context = React.createContext({
	dataList: [],
	onClickNav: () => {},
});

export default context;
