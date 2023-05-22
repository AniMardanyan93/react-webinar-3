import React, { useState } from "react";
import './style.css';

function CartItem({id, title, count, price, removeItem}){
    return(
            <tr>
                <td>{title}</td>
                <td>{price} ₽</td>
                <td>{count} шт.</td>
                <td><button onClick={() => removeItem(id)}>Удалить</button></td>
            </tr>
    )
}
export default CartItem