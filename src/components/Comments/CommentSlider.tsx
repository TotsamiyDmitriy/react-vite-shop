import React, { ReactNode } from 'react';
import CommentCard from './CommentCard';
import '../../scss/components/blog/blogSlider.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../scss/components/pagination.scss';
import 'swiper/css/scrollbar';

interface ppI {
  author: string;
  image: string;
  description: string;
}

const pp: Array<ppI> = [
  {
    author: '',
    image: 'https://i.ibb.co/c6j5N93/cute-girl-pic-2-1024x1024.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae natus doloribus enim sunt ipsam iusto vel alias ullam iste tenetur. Culpa sapiente cupiditate earum inventore incidunt. Libero perspiciatis ipsa expedita.',
  },
  {
    author: '',
    image: 'https://i.ibb.co/c6j5N93/cute-girl-pic-2-1024x1024.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, non deleniti maxime veritatis dolore aliquam, sed labore sequi sapiente tempore, pariatur voluptatibus voluptatem velit magnam esse a animi distinctio obcaecati!',
  },
  {
    author: '',
    image: 'https://i.ibb.co/c6j5N93/cute-girl-pic-2-1024x1024.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, non deleniti maxime veritatis dolore aliquam, sed labore sequi sapiente tempore, pariatur voluptatibus voluptatem velit magnam esse a animi distinctio obcaecati!',
  },
  {
    author: '',
    image: 'https://i.ibb.co/c6j5N93/cute-girl-pic-2-1024x1024.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, non deleniti maxime veritatis dolore aliquam, sed labore sequi sapiente tempore, pariatur voluptatibus voluptatem velit magnam esse a animi distinctio obcaecati!',
  },
];

const CommentSlider = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const settings: object = {
    modules: [Navigation, Scrollbar, A11y, EffectCoverflow],
    slidesPerView: 1.9,
    spaceBetween: 20,
    scrollbar: { draggable: true },
    centeredSlides: true,
    loop: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    onBeforeInit: (swiper: any) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 2,
      slideShadows: false,
    },
    effect: 'coverflow',
    breakpoints: {
      // mobile + tablet - 320-990
      0: {
        slidesPerView: 1,
      },
      // desktop >= 1439
      1440: {
        slidesPerView: 1.5,
      },
    },
  };
  return (
    <div>
      <Swiper {...settings}>
        {pp.map((value: ppI, id: number): ReactNode => {
          return (
            <SwiperSlide className="slide" key={`${value}__${id}`}>
              <CommentCard {...value} key={`${value}__${id}`} />
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

export default CommentSlider;
