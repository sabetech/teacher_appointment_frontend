import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../Icons";

const Item = (props) => {
  const { page, component } = props;
  if (page === "homepage") {
    return <div id="page">{page}</div>;
  } else {
    return (
      <>
        <div id="page">
          <Link to="/">
            <button className="btn">
              <ArrowBackIcon /> Back to Home
            </button>
          </Link>
          {/* <h1>{page.name}</h1> */}
        </div>

        <div id="component">{component}</div>

      </>
    );
  }
};

export default Item;
