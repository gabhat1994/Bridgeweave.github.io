import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { GlobalStyle } from '../../globalStyles';
import ItemList from "./ItemList";

interface HomeProps {}

export const Home: FunctionComponent<HomeProps> = (props) => {
  return (
    <div className="container">
    <h1>CRUD Grid in React</h1>
    <ItemList />
    <GlobalStyle />
  </div>
  );
};

