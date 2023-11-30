import React from "react";
import PropTypes from "prop-types";
import CartItem from "../cartItem";
import "./style.css";

function CartList({ list, onDelete }) {
  return (
    <div className="Cart-list">
      {list.map((item) => (
        <div key={item.code} className="Cart-list-item">
          <CartItem item={item} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}

CartList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    })
  ).isRequired,
  onDelete: PropTypes.func,
};

CartList.defaultProps = {
  onDelete: () => {},
};

export default React.memo(CartList);
