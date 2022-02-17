
function FormCom({ userDetails, userInput, formError, submit, cancelFn }) {
    return (
        <form onSubmit={submit}>
            <h2>Register</h2><br />
            <button>Add User</button><br />

            <label htmlFor="firstName">First name:</label>
            <input type="text" id="firstName" name="firstName" value={userDetails.firstName} onChange={userInput}></input>
            <span className="sp1">{formError.firstName}</span><br />

            <label htmlFor="lastName">Last name:</label>
            <input type="text" id="lastName" name="lastName" value={userDetails.lastName} onChange={userInput}></input>
            <span className="sp1">{formError.lastName}</span><br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={userDetails.email} onChange={userInput}></input>
            <span className="sp1">{formError.email}</span><br />

            <label htmlFor="phone">Phone:</label>
            <input type="number" id="phone" name="phone" value={userDetails.phone} onChange={userInput}></input>
            <span className="sp1">{formError.phone}</span><br />

            <label htmlFor="company">Company:</label>
            <input type="text" id="company" name="company" value={userDetails.company} onChange={userInput}></input>
            <span className="sp1">{formError.company}</span><br />

            <label> Gender</label><br />

            <input type="radio" id="male" name="gender" value="male" onChange={userInput}></input>
            <label htmlFor="male">Male</label><span className="sp1">{formError.gender}</span><br />

            <input type="radio" id="female" name="gender" value="female" onChange={userInput}></input>
            <label htmlFor="female">Female</label><span className="sp1">{formError.gender}</span><br />

            <label htmlFor="dob">Date of birth:</label>
            <input type="date" id="dob" name="dob" value={userDetails.dob} onChange={userInput}></input>
            <span className="sp1">{formError.dob}</span><br />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={userDetails.password} onChange={userInput}></input>
            <span className="sp1">{formError.password}</span><br />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={userDetails.confirmPassword} onChange={userInput}></input>
            <span className="sp1">{formError.confirmPassword}</span><br />
            <span className="sp1">{formError.passwordMatching}</span><br />

            <button type="submit">Register</button>

            <button type="button" onClick={cancelFn}>Cancel </button>


        </form>
    );
}

export default FormCom;