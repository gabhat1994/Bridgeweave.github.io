import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface NotFoundProps {}

const NotFound: FunctionComponent<NotFoundProps> = (props) => {
  return (
    <div>
      <p>No Such page Found</p>{" "}
      <Link to={`/`}>navigate to Home </Link>
    </div>
  );
};

export default NotFound;
