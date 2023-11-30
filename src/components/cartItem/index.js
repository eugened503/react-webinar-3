import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function CartItem(props) {
  const callbacks = {
    onDelete: (e) => {
      e.stopPropagation();
      props.onDelete(props.item.code);
    },
  };

  return (
    <div className="Cart-item" onClick={callbacks.onClick}>
      <div className="Cart-item-code">{props.item.code}</div>
      <div className="Cart-item-title">{props.item.title}</div>
      <div className="Cart-item-price">{props.item.price}&nbsp;₽</div>
      <div className="Cart-item-sum">{props.item.count}&nbsp;шт</div>
      <div className="Cart-item-actions">
        <button onClick={callbacks.onDelete}>Удалить</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    sum: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
};

CartItem.defaultProps = {
  onDelete: () => {},
};

export default CartItem;
