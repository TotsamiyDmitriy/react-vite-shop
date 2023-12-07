import React from 'react';

import '../scss/components/tabs.scss';
import { ReviewType } from '../types/MainTypes';
import Review from './Review';
import Rating from '@mui/material/Rating';

interface ITabs {
  rewiews?: Array<ReviewType>;
  allRating: number;
}

const Tabs: React.FC<ITabs> = ({ rewiews, allRating }) => {
  const tabstitles = ['Product Details', 'Specification', 'Ratings & Reviews'];

  const [chooseTab, setChooseTab] = React.useState(0);
  const [rating, setRating] = React.useState(NaN);

  function ratingHandler(_e: React.SyntheticEvent<Element, Event>, value: number | null) {
    if (value !== null) {
      setRating(value);
    }
  }

  function tabHandler(id: number) {
    setChooseTab(id);
  }

  return (
    <div className="tabs">
      <div className="product_tabs">
        <div className="product_tabs_nav">
          <nav className="product_tabs_nav__navigation">
            {tabstitles.map((title: string, id: number) => {
              return (
                <span
                  key={title}
                  className={`product_tabs_nav__navigation_item ${
                    chooseTab === id ? 'active' : ''
                  }`}
                  onClick={() => tabHandler(id)}>
                  {title}
                </span>
              );
            })}
          </nav>
        </div>
        <div className="product_tabs__body">
          <div
            className={`product_tabs__body_block ${chooseTab === 0 ? 'active' : ''}`}
            id="tab_01">
            <div className="title details">Product Details</div>
            <p className="description details">
              Blue washed jacket, has a spread collar, 4 pockets, button closure, long sleeves,
              straight hem
            </p>
            <div className="title sizeAndFit">Size & Fit</div>
            <p className="description sizeAndFit">The model (height 5'8") is wearing a size S</p>
            <div className="title materialAndCare">Material & Care</div>
            <p className="description materialAndCare">
              100% cotton
              <br />
              Machine Wash
            </p>
          </div>

          <div
            className={`product_tabs__body_block ${chooseTab === 1 ? 'active' : ''}`}
            id="tab_02">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor hic at reiciendis
            temporibus optio molestias dicta molestiae ullam, quae aliquam, dolorem laudantium
            voluptates sequi iste quo aut. Quisquam, adipisci vitae!
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo provident neque optio
            eligendi totam, quibusdam dignissimos temporibus aliquam, possimus dolorum at voluptate,
            cum voluptatem. Nemo voluptate libero assumenda. Autem, molestias. Dolorem quidem
            exercitationem libero asperiores amet aspernatur velit voluptates ipsum id blanditiis.
            Asperiores voluptates, quisquam optio, molestias quibusdam reiciendis unde doloremque
            quod totam alias, illo nobis esse odio saepe! Mollitia.{' '}
          </div>
          <div
            className={`product_tabs__body_block ${chooseTab === 2 ? 'active' : ''}`}
            id="tab_03">
            <div className="title">Ratings</div>
            <div>
              <Rating size="medium" value={rating} onChange={ratingHandler} />
              <span>{allRating}</span>
            </div>
            {rewiews &&
              rewiews.map((review: ReviewType) => {
                return <Review key={`${review.author}__${review.date}`} review={review}></Review>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
