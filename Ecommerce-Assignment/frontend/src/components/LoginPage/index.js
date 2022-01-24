import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axiosbaseurl";
import "./index.css";

const LoginPage = () => {
    const [userObject, setUserObject] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const onChangeField = (event) => {
        const { name, value } = event.target;
        setUserObject({
            ...userObject,
            [name]: value,
        });
    };

    const onSubmitForm = async (event) => {
        event.preventDefault();
        // console.log(userObject);
        try {
            const data = await axios.post("/signin/", userObject);
            if (data !== undefined) {
                navigate("/useraccount");
            } else {
                alert(data.statusText);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="bg-container">
            <div className="form-container">
                <h2 className="login-form-heading">Login Form</h2>
                <form className="form-box" onSubmit={onSubmitForm}>
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
                        <input type="submit" value="Login" className="btn" />
                    </div>
                    <p className="sign-text">
                        Don't have account?{" "}
                        <span>
                            <Link className="signup-link" to="/Loguppage">
                                Signup
                            </Link>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
