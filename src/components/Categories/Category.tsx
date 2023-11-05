import React from 'react';
import '../../scss/components/category.scss';

interface ICategory {
  className: string;
  image: string;
  title: string;
  settings?: {};
}

const Category: React.FC<ICategory> = (props) => {
  return (
    <div className={`${props.className}`}>
      <div className="card">
        <h3 className="title">
          {props.title}
          <span>Explore</span>
        </h3>
        <img className="image" src={props.image} alt="" />
      </div>
    </div>
  );
};

export default Category;
