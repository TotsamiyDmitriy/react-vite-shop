import React from 'react';
import '../../scss/components/header.scss';
import { Search, Profile } from './';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { reloadFilters } from '../../redux/catalogSlice';
import { setOpenModal } from '../../redux/authSlice';

const categories: String[] = ['Men', 'Women', 'Kids'];

interface IHeader {
  [key: string]: any;
  burgerState: boolean;
  setBurgerState: (burgerState: boolean) => void;
}

const Header: React.FC<IHeader> = ({ burgerState, setBurgerState }) => {
  const dispatch = useAppDispatch();

  const HandlerModal = () => {
    dispatch(setOpenModal(true));
  };

  const HandlerReload = () => {
    const body = document.body;
    body?.classList.remove('disabled');
    dispatch(reloadFilters());
    setBurgerState(false);
  };

  const HandlerBurger = () => {
    const body = document.body;
    body?.classList.toggle('disabled');
    setBurgerState(!burgerState);
  };

  return (
    <div className="header">
      <div className="container">
        <nav className="header__navigation">
          <NavLink onClick={HandlerReload} className="logo" to={'/'}>
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
          <ul className={`categories ${burgerState ? 'active' : ''}`}>
            <Search className="mobile_search"></Search>
            <Profile
              onClickLink={HandlerReload}
              handlerModal={HandlerModal}
              className="mobile_profile"></Profile>
            {categories.map((el: String, id) => {
              return (
                <NavLink
                  onClick={HandlerReload}
                  className="link"
                  key={`${el}__${id}`}
                  to={`/catalog/${id}`}>
                  {el}
                </NavLink>
              );
            })}
            <NavLink onClick={HandlerReload} to={`/catalog/`} className="link">
              Shop
            </NavLink>
            <NavLink onClick={HandlerReload} to={`/about/`} className="link">
              Contact us
            </NavLink>
          </ul>
        </nav>
        <div className="account">
          <Search className="search"></Search>
          <Profile
            onClickLink={HandlerReload}
            handlerModal={HandlerModal}
            className="profile"></Profile>
        </div>
      </div>
    </div>
  );
};

export default Header;
