import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>
        Click <Link to="/Signup">here</Link> to sign up.
      </p>
    </div>
  );
};

export default Home;
