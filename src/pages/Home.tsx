import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = (props) => {
  return (
    <div>
      <p>This is home page</p>{" "}
      <Link to={`/details`}>Test</Link>
    </div>
  );
};

export default Home;
