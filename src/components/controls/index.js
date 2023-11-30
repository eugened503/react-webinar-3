import React from "react";
import PropTypes from 'prop-types';
import { plural, sum, numberProducts } from '../../utils';
import './style.css';

function Controls({ cart, setShow }) {

  const count = numberProducts(cart, 'count');

  return (
    <div className='Controls'>
      <div>
        <p>В корзине:</p>
        {cart.length > 0 ? (
          <span>
            {count}{" "}
            {plural(count, {
              one: 'товар',
              few: 'товара',
              many: 'товаров',
            })}
            &nbsp;/&nbsp;{sum(cart, 'price', 'count')}&nbsp;₽
          </span>
        ) : (
          <span>пусто</span>
        )}
        <button onClick={() => setShow(true)}>Перейти</button>
      </div>
    </div>
  );
}

Controls.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    })
  ).isRequired,
  setShow: PropTypes.func,
};

Controls.defaultProps = {
  setShow: () => {},
};

export default React.memo(Controls);
