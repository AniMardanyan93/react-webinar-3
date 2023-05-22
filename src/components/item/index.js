import React, {useState} from "react";
import PropTypes from "prop-types";
import {plural} from "../../utils";
import './style.css';

function Item({item, addToCart}){


  return (
    <div className="Item">
      <div className='Item-code'>{item.code}</div>
      <div className='Item-title'>{item.title}</div>
      <div className='Item-actions'>
        <button onClick={() => addToCart(item.code)} >
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  }).isRequired
};

export default React.memo(Item);