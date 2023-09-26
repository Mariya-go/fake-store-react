import { useState, useEffect } from "react";
import axios from "axios";
import "./Skincare.css";
import PropTypes from "prop-types";
import Item from "./Item";

const Skincare = () => {
  const [skincares, setSkincares] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getSkincares = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/category/skincare"
        );
        if (res.status === 200) {
          setSkincares(res.data.products);
        } else {
          throw new Error(
            "Failed to axios skincare with status: ${res.status}"
          );
        }
      } catch (err) {
        setError(err.message);
      }
    };
    getSkincares();
  }, []);

  return (
    <div className="items-container">
      {error && <p>{error}</p>}
      {!error &&
        skincares.map((skincare) => <Item key={skincare.id} data={skincare} />)}
    </div>
  );
};

Skincare.propTypes = {};

export default Skincare;
