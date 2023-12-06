import { FunctionComponent } from "react";
import { Link } from "react-router-dom";


export const NotFound: FunctionComponent = () => {
  return (
    <div>
      <p>No Such page Found</p>{" "}
      <Link to={`/`}>navigate to Home </Link>
    </div>
  );
};

