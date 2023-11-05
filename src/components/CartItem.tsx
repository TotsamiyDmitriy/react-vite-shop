import React from 'react';
import { CartProductType } from '../types/MainTypes';
import '../scss/pages/Cart/cartItem.scss';
import { useAppDispatch } from '../redux/hooks';
import { minusItems, plusItems, removeItems } from '../redux/cartSlice';
interface ICartItem {
  cartItem: CartProductType;
}

const CartItem: React.FC<ICartItem> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  const price = cartItem.price - (cartItem.price * cartItem.offers) / 100;

  function incrementQuantity() {
    dispatch(plusItems(cartItem.newId));
  }

  function decrementQuantity() {
    dispatch(minusItems(cartItem.newId));
  }

  function deleteCartItem() {
    dispatch(removeItems(cartItem.newId));
  }
  return (
    <div className="cart_card">
      <div className="cart_card_wrapper">
        <img className="cart_card_wrapper__photo" src={cartItem.photos[0]} alt="" />
        <div className="cart_card_wrapper__info">
          <div className="cart_card_wrapper__info_title">{`${cartItem.name}(${cartItem.color})`}</div>
          <div className="cart_card_wrapper__info_brand">{cartItem.brandName}</div>
          <div className="cart_card_wrapper__info_price">
            {`Rs. ${price}`}
            <s>{`Rs. ${cartItem.price}`}</s>
          </div>
          <div className="cart_card_wrapper__info_color">{`Color : ${cartItem.color}`}</div>
          <div className="cart_card_wrapper__info_size">{`Size : ${cartItem.size}`}</div>
          <div className="cart_card_wrapper__info_soldBy">
            Sold By : <span>{cartItem.soldBy}</span>
          </div>
        </div>
      </div>
      <div className="cart_card_uiWrapper">
        <button
          className="cart_card_uiWrapper__xMark"
          type="button"
          value=""
          onClick={deleteCartItem}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
        <div className="cart_card_uiWrapper__buttons">
          <div className="cart_card_uiWrapper__buttons_totalPrice">{`Total price : Rs. ${
            price * cartItem.count
          }`}</div>
          <div className="cart_card_uiWrapper__buttons_counter">
            <div
              className={`cart_card_uiWrapper__buttons_counter_counterBtn ${
                cartItem.count === 1 ? 'disabled' : ''
              }`}
              onClick={cartItem.count === 1 ? () => {} : decrementQuantity}>
              <span>-</span>
            </div>
            <span className="cart_card_uiWrapper__buttons_counter_quantity">{cartItem.count}</span>
            <div
              className="cart_card_uiWrapper__buttons_counter_counterBtn"
              onClick={incrementQuantity}>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
