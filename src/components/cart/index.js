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
                    <span>Корзина</span>
                    <span onClick={() => setIsShow(!isShow)}>Закрыть</span>
                </div>
                {
                    cart.length ?
                    cart.map(item => (
                        <CartItem key={item.code} id={item.code} price={item.price} title={item.title} count={item.count} removeItem={removeItem} />
                    ))
                    : <div className="emptyCart"> Карзина пустая</div>
                }
                <p className="sum">Итого {cart.reduce((acumlyator, curentItem) => acumlyator + curentItem.price,0)} ₽</p>
                
            </div>
        </div>
    )
}
export default Cart