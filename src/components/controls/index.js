import React, { useState } from "react";
import PropTypes from 'prop-types';
import './style.css';
import Cart from "../cart";

function Controls({cart, setCart}){

  const [isShow, setIsShow] = useState(false)

  const toggleShow = () => {
    setIsShow((show) => !show)
  }

  return (
    <div className='Controls'>
      <span>В корзине:{cart.length} товара / {cart.reduce((acumlyator, curentItem) => acumlyator + curentItem.price,0)} ₽ </span>
      <button onClick={toggleShow}>Перейти</button>
      {isShow && <Cart {...{cart, setCart, setIsShow, isShow}} />}
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
