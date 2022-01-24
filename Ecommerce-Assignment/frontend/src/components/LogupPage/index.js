import { Link } from "react-router-dom";
import axios from "../../axiosbaseurl";
import "./index.css";
import { useState } from "react";

const LogupPage = () => {
    const [userObject, setUserObject] = useState({
        name: "",
        email: "",
        password: "",
    });
    //const navigate = useNavigate();

    const onChangeField = (event) => {
        const { name, value } = event.target;
        setUserObject({
            ...userObject,
            [name]: value,
        });
    };

    const onSubmitSignupForm = async (event) => {
        event.preventDefault();
        //console.log(userObject);
        try {
            const received = await axios.post("/signup/", userObject);
            console.log(received.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="bg-container">
            <div className="form-container">
                <h2 className="login-form-heading">Logup Form</h2>
                <form className="form-box" onSubmit={onSubmitSignupForm}>
                    <div className="input-box">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Name"
                            value={userObject.name}
                            name="name"
                            onChange={onChangeField}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Email"
                            value={userObject.email}
                            name="email"
                            onChange={onChangeField}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Password"
                            value={userObject.password}
                            name="password"
                            onChange={onChangeField}
                        />
                    </div>
                    <div className="input-box">
                        <input type="submit" value="Logup" className="btn" />
                    </div>
                    <p className="sign-text">
                        Already have account?{" "}
                        <span>
                            <Link className="signin-link" to="/">
                                Login
                            </Link>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LogupPage;
