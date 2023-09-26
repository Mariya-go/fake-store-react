import "./Item.css";
import PropTypes from "prop-types";

const Item = ({ data }) => {
  return (
    <div className="item-container">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <div className="img-container">
        <img src={data.images[0]} alt={data.title} />
      </div>

      <p className="price">Price: $ {data.price}</p>
    </div>
  );
};

Item.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Item;
