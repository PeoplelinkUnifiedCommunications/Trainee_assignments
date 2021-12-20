import { Link } from "react-router-dom";

import { memo, React } from "react";

import { differenceInDays } from "date-fns";

import { connect } from "react-redux";

// import UsersDataContext from "../../context/usersdatacontext";

// import EachUserList from "../EachUserList";

import "./index.css";

const ViewUserDetails = ({ usersList }) => {
    // const value1 = useContext(UsersDataContext);
    // const { usersData } = value1;
    // console.log(usersData);
    const users = usersList.length === 0 ? true : false;

    const LastUser = memo(({ name, email, dob }) => {
        const today = new Date();
        let days = differenceInDays(new Date(today), new Date(dob));
        let age = Math.floor(days / 365);
        console.log("siva", email);
        return (
            <>
                <li className="list-item">
                    <p className="user-name">{name}</p>
                    <p className="user-name email-text">{email}</p>
                    <p className="user-name">{age}</p>
                </li>
                <hr className="line" />
            </>
        );
    });

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
                        usersList.map((eachUser) => (
                            <LastUser {...eachUser} key={eachUser.id} />
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

const mapStateToProps = (state) => ({
    usersList: state,
});

export default connect(mapStateToProps)(ViewUserDetails);
