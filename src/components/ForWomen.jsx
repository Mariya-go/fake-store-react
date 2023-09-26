import "./ForWomen.css";
import PropTypes from "prop-types";
import { NavLink, Outlet } from "react-router-dom";

const ForWomen = () => {
  return (
    <div>
      <ul className="for-women">
        <li>
          <NavLink className="dresses" to="womens-dresses">
            Women Dresses
          </NavLink>
          <img
            src="./src/assets/young-woman-beautiful-red-dress.jpg"
            alt=""
            className="dress"
          />
        </li>
        <li>
          <NavLink className="shoes" to="womens-shoes">
            Women Shoes
          </NavLink>
          <img
            className="shoe"
            src="./src/assets/composition-beautiful-mother-s-day-elements.jpg"
            alt=""
          />
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

ForWomen.propTypes = {};

export default ForWomen;
