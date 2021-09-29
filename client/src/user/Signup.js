import { useState } from "react";
import { Link } from "react-router-dom";
import { create } from "./api-user.js";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
    open: false,
    error: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
    };
    create(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: "", open: true });
      }
    });
      return (
        <div className="dialog" open={values.open} disableBackdropClick={true}>
          <div className="dialogTitle">New Account</div>
          <div className="dialogContent">
            <div className="dialogContentText">
              New account successfully created.
            </div>
          </div>
          <div>
            <Link to="/signin">
              <button color="primary" autoFocus="autoFocus" variant="contained">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      );
  };

  return (
    <div>
      <form className="formGroup card">
        <div className="cardContent">
          <h6 className="formHeader">Sign Up</h6>
          <input
            className="textField"
            id="name"
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
          />
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="email"
            type="email"
            label="Email"
            className="textField"
            value={values.email}
            onChange={handleChange("email")}
            margin="normal"
          />
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="password"
            type="password"
            label="Password"
            className="textField"
            value={values.password}
            onChange={handleChange("password")}
            margin="normal"
          />
          <label htmlFor="password">Password</label>
          <br />{" "}
          {values.error && (
            <p color="error">
              <i color="error" className="error">
                error
              </i>
              {values.error}
            </p>
          )}
        </div>
        <div>
          <button
            color="primary"
            variant="contained"
            onClick={clickSubmit}
            className="submitButton"
          >
            Submit
          </button>
        </div>
        <br />
        <br />
        <div>
          <small>
            Already a member? <Link to="/Login">Sign in</Link>
          </small>
        </div>
      </form>
    </div>
  );
};

export default Signup;
