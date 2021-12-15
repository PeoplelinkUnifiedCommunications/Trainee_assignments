import React from "react";

const ListContext = React.createContext({
	list: [],
	addList: () => {},
});

export default ListContext;
