import React, { useState } from "react";
import './style.css';
import CartItem from "../cartItem";

function Cart({cart, setCart, setIsShow, isShow}){

    const removeItem = (id) => {
        setCart([
            ...cart.filter(item => item.code != id)
        ])
    }

    return(
        <div className="Cart">
            <div className="popUp">
                <div className="cartHeader">
                    <span className="header">Корзина</span>
                    <button onClick={() => setIsShow(!isShow)}>Закрыть</button>
                </div>
                <div className="cartContent">
                    <table>
                        {
                            cart.length ?
                            cart.map(item => (
                                <CartItem key={item.code} id={item.code} price={item.price} title={item.title} count={item.count} removeItem={removeItem} />
                            ))
                            : <div className="emptyCart"> Карзина пустая</div>
                        }
                        <tr>
                            <td></td><td><b>Итого</b></td>
                            <td>{cart.reduce((acumlyator, curentItem) => acumlyator + curentItem.price,0)} ₽</td><td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Cart