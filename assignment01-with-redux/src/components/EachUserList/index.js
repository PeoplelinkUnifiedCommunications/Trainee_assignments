import { differenceInYears } from "date-fns";
import { useMemo } from "react";

import { useDispatch } from "react-redux";

import { delData } from "../../reducer";
import "./index.css";

const EachUserList = (props) => {
    const { eachUser } = props;
    //console.log("comp rendered");
    const { id, name, email, dob } = eachUser;
    const today = new Date();
    let age = differenceInYears(new Date(today), new Date(dob));
    const dispatch = useDispatch();

    return useMemo(() => {
        console.log("comp rendered");
        return (
            <>
                <li className="list-item">
                    <p className="user-name">{name}</p>
                    <p className="user-name">{email}</p>
                    <p className="user-name">{age}</p>
                    <button
                        type="button"
                        className="delete-button"
                        onClick={() => dispatch(delData(id))}
                    >
                        <img
                            className="delete"
                            src="/deleteIcon.png"
                            alt="delete"
                        />
                    </button>
                </li>
                <hr className="line" />
            </>
        );
    }, [id, name, email, age, dispatch]);
};

export default EachUserList;
