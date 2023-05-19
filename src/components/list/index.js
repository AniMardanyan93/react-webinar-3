import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({list, cart, setCart}){

  const addToCart = (id) => {
    const currentProdcut = list.find(item => item.code === id)
    if(cart.some(item => item.code === currentProdcut.code)){
        setCart([
            ...cart.map(item => {
                if(item.code === currentProdcut.code){
                    return {
                        ...item,
                        count : item.count +1,
                        price: item.price + item.price/item.count
                    }
                }
                return item
            })
        ])
    }else{
        setCart([
            ...cart,
            {
                code: currentProdcut.code,
                title: currentProdcut.title,
                price: currentProdcut.price,
                count: 1
            }
        ])
    }
    
}

  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item {...{addToCart, item}}/>
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func,
  onSelectItem: PropTypes.func
};

List.defaultProps = {
  onDeleteItem: () => {},
  onSelectItem: () => {},
}

export default React.memo(List);
