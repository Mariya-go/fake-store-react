import { useState, useEffect } from "react";
import axios from "axios";
import "./WomenShoes.css";
import PropTypes from "prop-types";
import Item from "./Item";

const WomenShoes = () => {
  const [shoes, setShoes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getShoes = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/category/womens-shoes"
        );
        if (res.status === 200) {
          setShoes(res.data.products);
        } else {
          throw new Error("Failed to axios shoes with status: ${res.status}");
        }
      } catch (err) {
        setError(err.message);
      }
    };
    getShoes();
  }, []);

  return (
    <div className="items-container">
      {error && <p>{error}</p>}
      {!error && shoes.map((shoe) => <Item key={shoe.id} data={shoe} />)}
    </div>
  );
};

WomenShoes.propTypes = {};

export default WomenShoes;
