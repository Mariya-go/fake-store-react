import { useEffect, useState } from "react";
import "./Fragrances.css";
import PropTypes from "prop-types";
import axios from "axios";
import Item from "./Item";

const Fragrances = () => {
  const [fragrance, setFragrance] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getFragrance = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/category/fragrances"
        );
        if (res.status === 200) {
          setFragrance(res.data.products);
        } else {
          throw new Error(
            "Failed to axios fragrance with status: ${res.status}"
          );
        }
      } catch (err) {
        setError(err.message);
      }
    };
    getFragrance();
  }, []);

  return (
    <div className="items-container">
      {error && <p>{error}</p>}
      {!error &&
        fragrance.map((fragrance) => (
          <Item key={fragrance.id} data={fragrance} />
        ))}
    </div>
  );
};

Fragrances.propTypes = {};

export default Fragrances;
