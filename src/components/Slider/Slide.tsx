import React from 'react';
import Button from '../Button';
import '../../scss/components/slide.scss';

export interface slideProps {
  image1?: string | undefined;
  image2?: string | undefined;
  title?: React.ReactNode;
  titleButton?: React.ReactNode;
  inverse?: Boolean;
  banner?: Boolean;
}

const Slide = (props: slideProps) => {
  const inverseLogic = `${props.inverse === true ? 'inverse' : ''}`;
  const bannerLogic = `${props.banner === true ? 'banner' : ''}`;
  return (
    <div className={`slide ${bannerLogic}`}>
      {props.image1 == null ? '' : <img src={props.image1} alt="" className="image1" />}

      <div className="container">
        <img src={props.image2} alt="" className={`image2 ${bannerLogic}`} />
        <div className="containerText">
          {props.title}
          <span className={inverseLogic}>Big Fashion Festival</span>
          <span className={inverseLogic}>50% - 80% off</span>
          <Button className={`button ${inverseLogic}`} blank>
            {props.titleButton}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
