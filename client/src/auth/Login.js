import {useState} from "react";
import auth from "./auth-helper";
import { Link, Redirect } from "react-router-dom";
import { signin } from "./api-auth";
import "./Login.css"


const Login = (props) => {
    const [values, setValues] = useState({
      email: "",
      password: "",
      error: "",
      redirectToReferrer: false,
    });

    const clickSubmit = () => {
      const user = {
        email: values.email || undefined,
        password: values.password || undefined,
      };

      signin(user).then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          auth.authenticate(data, () => {
            setValues({ ...values, error: "", redirectToReferrer: true });
          });
        }
      });
    };

    const handleChange = (name) => (event) => {
      setValues({ ...values, [name]: event.target.value });
    };

    const { from } = props.location.state || {
      from: {
        pathname: "/",
      },
    };
    const { redirectToReferrer } = values;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <form className="formControl card">
        <div className="cardContent">
          <h6 className="cardTitle">Login</h6>
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
            Not a member yet? <Link to="/Signup">Sign up now</Link>
          </small>
        </div>
      </form>
    );
}

export default Login;
