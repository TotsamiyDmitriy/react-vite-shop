import React from 'react';
import '../../scss/components/header.scss';
import { Search, Profile } from './';
import { NavLink } from 'react-router-dom';

const categories: Array<String> = ['Men', 'Women', 'Kids'];

const HandlerBurger = () => {
  const burger = document.getElementById('burger');
  burger?.classList.toggle('active');
};

interface IHeader {
  handlerModal: () => void;
}

const Header: React.FC<IHeader> = ({ handlerModal }) => {
  return (
    <div className="header">
      <div className="container">
        <nav className="header__navigation">
          <NavLink className="logo" to={'/'}>
            <svg
              width="57"
              height="48"
              viewBox="0 0 57 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.5503 37.831L56.9942 48L57 22.6542L38.5503 12.0146V37.831ZM18.8805 0L39.0257 9.2483L20.0776 22.6534L20.071 48L0 38.6318V13.507L18.8805 0Z"
                fill="#002482"
              />
            </svg>
          </NavLink>
          <div className="header__burger" onClick={HandlerBurger}>
            <span></span>
          </div>
          <ul className="categories" id="burger">
            <Search className="mobile_search"></Search>
            <Profile handlerModal={handlerModal} className="mobile_profile"></Profile>
            {categories.map((el: String, id: Number): React.ReactNode => {
              return (
                <NavLink className="link" key={`${el}__${id}`} to={`/catalog/${id}`}>
                  {el}
                </NavLink>
              );
            })}
            <NavLink to={`/catalog/`} className="link">
              Shop
            </NavLink>
            <NavLink to={`/about/`} className="link">
              Contact us
            </NavLink>
          </ul>
        </nav>
        <div className="account">
          <Search className="search"></Search>
          <Profile handlerModal={handlerModal} className="profile"></Profile>
        </div>
      </div>
    </div>
  );
};

export default Header;
