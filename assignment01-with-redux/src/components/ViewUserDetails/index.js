import { Link } from "react-router-dom";

import { memo, React, useState } from "react";

//import { differenceInYears } from "date-fns";

import { useSelector, useDispatch } from "react-redux";

import { delData } from "../../reducer";

// import UsersDataContext from "../../context/usersdatacontext";

import EachUserList from "../EachUserList";

import "./index.css";

const ViewUserDetails = () => {
    // const value1 = useContext(UsersDataContext);
    // const { usersData } = value1;
    // console.log(usersData);
    const usersList = useSelector((state) => state.addReducer.value);
    // console.log(usersList);
    // const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    // const LastUser = memo(({ id, name, email, dob }) => {
    //     const today = new Date();
    //     let age = differenceInYears(new Date(today), new Date(dob));
    //     //let age = Math.floor(days / 365);
    //     //console.log("siva", email);
    //     return (
    //         <>
    //             <li className="list-item">
    //                 <p className="user-name">{name}</p>
    //                 <p className="user-name email-text">{email}</p>
    //                 <p className="user-age">{age}</p>
    //                 <button
    //                     className="delete-button"
    //                     onClick={() => dispatch(delData(id))}
    //                 >
    //                     <img
    //                         className="delete"
    //                         src="/deleteIcon.png"
    //                         alt="delete"
    //                     />
    //                 </button>
    //             </li>
    //             <hr className="line" />
    //         </>
    //     );
    // });

    const onSearch = (event) => setSearch(event.target.value);

    const filteredData = usersList.filter((item) => {
        return Object.keys(item).some((key) => {
            if (key !== "id") {
                return item[key].toLowerCase().includes(search.toLowerCase());
            } else {
                return null;
            }
        });
    });
    const users = filteredData.length === 0 ? true : false;
    // console.log(filteredData);

    return (
        <div className="view-user-details-container">
            <input
                className="search"
                type="text"
                value={search}
                onChange={onSearch}
                placeholder="Search"
            />
            <ul className="user-details-list">
                <li className="list-item">
                    <p className="user-name text-weight">Name</p>
                    <p className="user-name text-weight">Email</p>
                    <p className="user-name text-weight">Age</p>
                    <p className="user-name action-text text-weight">Delete</p>
                </li>
                <hr className="line" />
                <div className="list-items">
                    {users ? (
                        <p className="no-data">No Data Found</p>
                    ) : (
                        filteredData.map((eachUser) => (
                            // <LastUser {...eachUser} key={eachUser.id} />
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
