import React, { useState } from "react";
import './style.css';

function CartItem({id, title, count, price, removeItem}){
    return(
        <div className="CartItem">
            <div>
                <span>{title}</span>
                <span>{price} ₽</span>
                <span>{count} шт.</span>
                <button onClick={() => removeItem(id)}>Удалить</button>
            </div>

        </div>
    )
}
export default CartItem