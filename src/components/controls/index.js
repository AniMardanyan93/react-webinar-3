import React, { useState } from "react";
import PropTypes from 'prop-types';
import './style.css';
import Cart from "../cart";
import { plural } from "../../utils";

function Controls({cart, setCart, toggleShow}){

 

  return (
    <div className='Controls'>
      <span className="products-sum">В корзине: <b> { cart.length ? cart.length + ' ' + plural(cart.length, {one: 'товар', few: 'товара', many: 'товаров'}) + ' / ' + cart.reduce((acumlyator, curentItem) => acumlyator + curentItem.price,0).toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ') + ' ₽' : ' пусто ' }</b></span>
      <button onClick={toggleShow}>Перейти</button>
    </div>

  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => {}
}

export default React.memo(Controls);
