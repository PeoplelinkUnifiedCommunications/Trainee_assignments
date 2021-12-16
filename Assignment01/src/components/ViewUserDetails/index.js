import { Link } from "react-router-dom";

import { React, useContext } from "react";

import UsersDataContext from "../../context/usersdatacontext";

import EachUserList from "../EachUserList";

import "./index.css";

const ViewUserDetails = () => {
    const value1 = useContext(UsersDataContext);
    const { usersData } = value1;
    console.log(usersData);
    const users = usersData.length === 0 ? true : false;

    return (
        <div className="view-user-details-container">
            <ul className="user-details-list">
                <li className="list-item">
                    <p className="user-name text-weight">Name</p>
                    <p className="user-name email-text text-weight">Email</p>
                    <p className="user-name text-weight">Age</p>
                </li>
                <hr className="line" />
                <div className="list-items">
                    {users ? (
                        <p className="no-data">No Data Found</p>
                    ) : (
                        usersData.map((eachUser) => (
                            <EachUserList
                                eachUser={eachUser}
                                key={eachUser.id}
                            />
                        ))
                    )}
                </div>
            </ul>

            <div className="button-container">
                <Link to="form">
                    <button className="button">Form</button>
                </Link>
            </div>
        </div>
    );
};

export default ViewUserDetails;
