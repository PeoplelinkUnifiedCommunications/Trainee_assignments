import React from "react";

const UsersDataContext = React.createContext({
    usersData: [],
    onSubmitForm: () => {},
});

export default UsersDataContext;
