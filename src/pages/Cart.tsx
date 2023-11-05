import React from 'react';
import { useAppSelector } from '../redux/hooks';
import styles from '../scss/pages/Cart/cart.module.scss';
import { CartProductType } from '../types/MainTypes';
import CartItem from '../components/CartItem';

import { Link } from 'react-router-dom';
const Cart: React.FC = () => {
  const state = useAppSelector(({ cartReducer }) => ({
    cart: cartReducer.items,
    totalPrice: cartReducer.accumPrice,
  }));

  return state.cart.length !== 0 ? (
    <div className={styles.main}>
      <span className={styles.title}>
        <h1>
          My <span>Cart</span>
        </h1>
        <span className={styles.counter}>{`(${state.cart.length} items)`}</span>
      </span>
      <div className={styles.listWrapper}>
        {state.cart.map((element: CartProductType) => {
          return (
            <CartItem
              key={`${element.id}_${element.color}__${element.size}$`}
              cartItem={element}></CartItem>
          );
        })}
        <div className={styles.totalPrice}>{`Total price : Rs.${state.totalPrice}`}</div>
      </div>
    </div>
  ) : (
    <div className={styles.main}>
      <div className={styles.noItems}>
        <h4>You dont have items in your cart</h4>
        <Link to={'/catalog/'} className={styles.goToCart}>
          go to shop
        </Link>
      </div>
    </div>
  );
};

export default Cart;
