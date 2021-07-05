import CardContainer from "../../containers/CardContainer";
import { Link } from "react-router-dom";
const CatComponent = ({ categoria }) => {
  return (
    <Link className="nav-link" to={`/categoria/${categoria}`}>
      {" "}
      {categoria}{" "}
    </Link>
  );
};

export default CatComponent;
