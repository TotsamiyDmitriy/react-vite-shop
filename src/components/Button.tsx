import React from 'react';
import '../scss/components/button.scss';
import { NavLink } from 'react-router-dom';
interface ButtonType {
  className: string;
  children: React.ReactNode;
  blank?: boolean;
  cart?: boolean;
  onClick?: () => void;
  navigation?: string;
}
const Button = (props: ButtonType) => {
  return props.navigation ? (
    <NavLink to={props.navigation}>
      <button
        onClick={props.onClick}
        className={`${props.className} myButton ${props.blank === true ? 'blank' : ''} ${
          props.cart === true ? 'cart' : ''
        }`}>
        {props.children}
      </button>
    </NavLink>
  ) : (
    <button
      onClick={props.onClick}
      className={`${props.className} myButton ${props.blank === true ? 'blank' : ''} ${
        props.cart === true ? 'cart' : ''
      }`}>
      {props.children}
    </button>
  );
};

export default Button;
