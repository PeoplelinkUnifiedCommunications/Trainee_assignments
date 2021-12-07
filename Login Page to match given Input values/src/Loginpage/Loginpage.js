import React, { useState } from "react";
import './Login.css'
function LoginPage() {
    const Users = [{
        email: "vamsi@peoplelinkvc.com",
        password: "Vamsi1"
    }
    ];
    const [data, setData] = useState(
        [{
            email: "",
            password: ""
        }]
    )
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let checkUser = Users.findIndex(
            (ele) => {
                return (data.email === ele.email && data.password === ele.password)
            }
        );
        if (!checkUser) {
            alert("matched")
        }
        else {
            alert("Input field didn't match")
        }
    };
    return (
        <div className="LoginPage">
            <div className="Login">
                <h1>Login Page</h1><br />
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Username"
                        onChange={handleChange}
                        value={data.email}
                        required
                    /><br /><br />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                    /><br /><br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
}
export default LoginPage