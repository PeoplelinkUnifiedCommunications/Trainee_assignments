import { differenceInYears } from "date-fns";

import { useDispatch } from "react-redux";

import { delData } from "../../reducer";
import "./index.css";

const EachUserList = (props) => {
    const { eachUser } = props;
    const { id, name, email, dob } = eachUser;
    const today = new Date();
    let age = differenceInYears(new Date(today), new Date(dob));
    const dispatch = useDispatch();

    return (
        <>
            <li className="list-item">
                <p className="user-name">{name}</p>
                <p className="user-name email-text">{email}</p>
                <p className="user-age">{age}</p>
                <button
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
};

export default EachUserList;
