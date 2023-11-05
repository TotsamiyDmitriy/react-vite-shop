import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import TradeSlide from './TradeSlide';
import styles from '../../scss/components/tradeSlider.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

type PropsType = {
  title: string;
};

type ppType = {
  title: string;
  image: string;
  button: string;
};

const pp: Array<ppType> = [
  {
    title: 'Min 60% off',
    image: 'https://i.ibb.co/8bHR360/14da57684b01bb173550f78c1bfa0d82.jpg',
    button: 'Explore',
  },
  {
    title: 'Min 60% off',
    image: 'https://i.ibb.co/znZp95M/5a65929a53732fe755a5ca4a69beaed0.jpg',
    button: 'Explore',
  },
  {
    title: 'Min 60% off',
    image: 'https://i.ibb.co/xj34Vwj/36103bdefadaaaade1a47c0d611d460f.jpg',
    button: 'Explore',
  },
  {
    title: 'Min 60% off',
    image: 'https://i.ibb.co/8bHR360/14da57684b01bb173550f78c1bfa0d82.jpg',
    button: 'Explore',
  },
  {
    title: 'Min 60% off',
    image: 'https://i.ibb.co/xj34Vwj/36103bdefadaaaade1a47c0d611d460f.jpg',
    button: 'Explore',
  },
  {
    title: 'Min 60% off',
    image: 'https://i.ibb.co/znZp95M/5a65929a53732fe755a5ca4a69beaed0.jpg',
    button: 'Explore',
  },
];

const TradeSlider: React.FC<PropsType> = ({ title }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const settings: object = {
    modules: [Navigation, Pagination, Scrollbar, A11y, EffectCoverflow],
    slidesPerView: 1.9,
    spaceBetween: 20,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    centeredSlides: true,
    loop: true,

    onBeforeInit: (swiper: any) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
    },

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    effect: 'coverflow',
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      // desktop >= 1439
      1440: {
        slidesPerView: 1.5,
      },
    },
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{title}</h2>
      <Swiper {...settings}>
        {pp.map((val: ppType, id: number) => {
          return (
            <SwiperSlide key={`${val}__${id}`} className={styles.swiper}>
              <TradeSlide key={`${val}__${id}`} {...val} />
            </SwiperSlide>
          );
        })}
        <div ref={navigationPrevRef} className="navPrev">
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="27"
              cy="27"
              r="27"
              transform="matrix(-1 0 0 1 54 0)"
              fill="#272727"
              fillOpacity="0.8"
            />
            <path
              d="M29.7498 17.75L32.041 20.0412L24.5985 27.5L32.041 34.9587L29.7498 37.25L19.9998 27.5L29.7498 17.75Z"
              fill="white"
            />
          </svg>
        </div>
        <div ref={navigationNextRef} className="navNext">
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="27" cy="27" r="27" fill="#272727" fillOpacity="0.8" />
            <path
              d="M24.2502 17.75L21.959 20.0412L29.4015 27.5L21.959 34.9587L24.2502 37.25L34.0002 27.5L24.2502 17.75Z"
              fill="white"
            />
          </svg>
        </div>
      </Swiper>
    </div>
  );
};

export default TradeSlider;
