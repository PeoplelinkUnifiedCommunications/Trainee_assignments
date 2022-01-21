import { Link } from "react-router-dom";
import "./index.css";

const LogupPage = () => {
    return (
        <div className="bg-container">
            <div className="form-container">
                <h2 className="login-form-heading">Logup Form</h2>
                <form className="form-box">
                    <div className="input-box">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Name"
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Password"
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
