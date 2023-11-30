import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import CartList from "../cartList";
import { sum } from "../../utils";

function Modal({ cart, setShow, onDelete }) {
  const cn = bem("Modal");
  return (
    <div className={cn()}>
      <div className={cn("content")}>
        <div className={cn("header")}>
          <p>Корзина</p>
          <button onClick={() => setShow(false)}>Закрыть</button>
        </div>{" "}
        {cart.length > 0 && (
          <div className={cn("body")}>
            <CartList list={cart} onDelete={onDelete} />
          </div>
        )}
        <div className={cn("footer")}>
          <span>Итого</span>
          <span>{sum(cart, "price", "count")}&nbsp;₽</span>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  setShow: PropTypes.func,
  onDelete: PropTypes.func,
};

Modal.defaultProps = {
  setShow: () => {},
  onDelete: () => {},
};

export default React.memo(Modal);
