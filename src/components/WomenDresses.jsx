import { useState, useEffect } from "react";
import axios from "axios";
import "./WomenDresses.css";
import PropTypes from "prop-types";
import Item from "./Item";

const WomenDresses = () => {
  const [dress, setDress] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getDress = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/category/womens-dresses"
        );
        if (res.status === 200) {
          setDress(res.data.products);
        } else {
          throw new Error("Failed to axios dress with status: ${res.status}");
        }
      } catch (err) {
        setError(err.message);
      }
    };
    getDress();
  }, []);

  return (
    <div className="items-container">
      {error && <p>{error}</p>}
      {!error && dress.map((dress) => <Item key={dress.id} data={dress} />)}
    </div>
  );
};

WomenDresses.propTypes = {};

export default WomenDresses;
