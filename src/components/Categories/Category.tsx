import React from 'react';
import '../../scss/components/category.scss';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { reloadFilters } from '../../redux/catalogSlice';

interface ICategory {
  className: string;
  image: string;
  title: string;
  settings: {
    to: string;
    filters: {};
  };
  dispatcher: (settings: any) => void;
}

const Category: React.FC<ICategory> = ({ className, image, title, settings, dispatcher }) => {
  const dispatch = useAppDispatch();
  return (
    <NavLink
      to={settings.to}
      className={`${className}`}
      onClick={() => {
        dispatch(reloadFilters());
        dispatcher(settings.filters);
      }}>
      <div className="card">
        <h3 className="title">
          {title}
          <span>Explore</span>
        </h3>
        <img className="image" src={image} alt="" />
      </div>
    </NavLink>
  );
};

export default Category;
