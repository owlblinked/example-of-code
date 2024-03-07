import { Link } from "react-router-dom";
import { Card } from "../components/UI/Card/Card";

const TITLE = "An error occurred!";
const SUBTITLE = "Let's try to check a main page";

export const ErrorPage = () => {
  return (
    <section className="container">
      <Card>
        <h1 className="title">{TITLE}</h1>
        <p className="subtitle">{SUBTITLE}</p>
        <Link to="/">Go back to the catalog of candidates</Link>
      </Card>
    </section>
  );
};
