import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../scss/components/pagination.scss';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Slide from './Slide';

const Slider: React.FC = () => {
  const settings = {
    modules: [Navigation, Pagination, Autoplay, A11y],
    slidesPerView: 1,
    pagination: { clickable: true },
    loop: true,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    speed: 500,
  };

  const pp = [
    {
      image1: 'https://i.ibb.co/3N1vYmF/left.png',
      image2: 'https://i.ibb.co/W5xg6K3/right.png',
      title: (
        <svg viewBox="0 0 533 83" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.66923 82.9859H2.18639C1.56204 82.9859 0 82.9859 0 82.0474C0 81.4256 0.313344 81.1088 1.2487 80.7944C8.11654 78.6005 9.66689 74.8462 9.66689 69.5315V13.4685C9.66689 8.45651 8.10485 4.69988 1.2487 2.20564C0.313344 2.20564 0 1.57914 0 1.26707C0 0.016425 1.56204 0.328499 2.18639 0.328499H63.9689C78.0109 0.328499 89.5602 11.5913 89.5602 25.691C89.5602 39.7906 78.0109 51.0394 63.9689 51.0394H32.7631V70.1416C33.0765 75.1512 34.6338 78.5887 41.1813 80.7873C42.1167 81.1017 42.4277 81.4162 42.4277 82.0403C42.4277 82.9789 40.868 82.9789 40.2436 82.9789H9.66923V82.9859ZM470.284 52.6115H484.951L470.284 27.5587L468.72 25.0528L455.625 52.6115H470.284ZM470.284 0.00703927H480.272L522.084 73.9193C523.335 75.7965 524.89 77.6736 526.761 78.6122C528.321 79.8675 530.192 80.1843 531.751 80.8061C532.378 81.1229 533 81.4373 533 82.0614C533 83 531.44 83 530.814 83H493.68C493.058 83 491.18 83 491.18 82.0614C491.18 81.4373 491.807 81.1229 492.436 80.8061C494.307 80.1843 495.551 79.2434 496.177 77.3662C496.804 75.17 496.177 73.924 494.618 71.0989C492.499 66.5797 490.317 62.0918 488.07 57.6352H453.118L452.81 58.2593C452.494 59.5147 450.004 63.8907 448.133 68.5953C445.64 73.6049 444.703 74.8556 445.327 77.3615C445.643 79.2387 447.198 80.1773 449.068 80.8037C449.697 81.1205 450.004 81.4349 450.004 82.0567C450.004 82.9953 448.439 82.9953 447.817 82.9953H430.651C430.029 82.9953 428.465 82.9953 428.465 82.0567C428.465 81.4349 428.78 81.1182 429.714 80.8037C431.278 80.1796 433.144 79.8652 434.706 78.6098C436.577 77.6713 438.141 75.7941 439.383 73.917L441.569 69.2242L465.287 19.419L461.85 13.4685C458.735 8.45651 455.611 5.32638 452.178 3.44689C450.619 2.50833 449.057 2.50833 447.502 1.88183C446.566 1.56741 446.251 1.25299 446.566 0.626495C446.566 0 447.188 0.314421 447.502 0H470.287L470.284 0.00703927ZM376.983 82.6692H378.232C435.655 82.6692 435.033 0.309728 378.232 0.309728H331.111C330.175 0.309728 328.618 -0.00469284 328.618 1.2483C328.618 1.56037 329.24 2.18687 329.862 2.18687C336.728 4.37842 338.28 8.13739 338.598 12.8373V70.158C338.29 75.1653 336.728 78.6051 329.862 80.8014C329.24 81.1182 328.618 81.4326 328.618 82.0567C328.618 82.9953 330.178 82.9953 331.111 82.9953H361.381V82.6785H376.983V82.6692ZM376.983 6.26495C381.199 6.28162 385.238 7.96927 388.221 10.9604C391.203 13.9515 392.886 18.0037 392.905 22.2347V60.4391C392.887 64.6703 391.204 68.7229 388.221 71.7141C385.239 74.7054 381.2 76.3928 376.983 76.4089H361.369V6.26495H376.983ZM258.078 52.6115H272.745L258.078 27.5587L256.516 25.0528L243.421 52.6115H258.078ZM258.078 0.00703927H268.367L310.185 73.9193C311.12 75.7965 312.682 77.6736 314.555 78.6122C316.112 79.8675 317.99 80.1843 319.861 80.8061C320.483 81.1229 321.105 81.4373 321.105 82.0614C321.105 83 319.234 83 318.612 83H281.49C280.864 83 279.304 83 279.304 82.0614C279.304 81.4373 279.612 81.1229 280.548 80.8061C282.112 80.1843 283.667 79.2434 283.983 77.3662C284.605 75.17 283.983 73.924 282.734 71.0989C280.548 66.4061 278.057 62.0183 275.873 57.6352H240.912L240.601 58.2593C240.29 59.5147 238.104 63.8907 235.924 68.5953C233.74 73.6049 232.494 74.8556 233.118 77.3615C233.743 79.2387 234.989 80.1773 236.86 80.8037C237.482 81.1205 238.106 81.4349 238.106 82.0567C238.106 82.9953 236.546 82.9953 235.613 82.9953H218.756C218.132 82.9953 216.259 82.9953 216.259 82.0567C216.259 81.4349 216.883 81.1182 217.507 80.8037C219.378 80.1796 220.94 79.8652 222.815 78.6098C224.373 77.6713 226.248 75.7941 227.181 73.917L229.365 69.2242L253.397 19.419L249.969 13.4685C246.849 8.45651 243.421 5.32638 240.295 3.44689C238.424 2.50833 237.173 2.50833 235.3 1.88183C234.673 1.56741 234.049 1.25299 234.365 0.626495C234.68 0 235.3 0.314421 235.616 0H258.083L258.078 0.00703927ZM155.093 54.8054C162.272 57.3067 171.011 57.9308 177.874 55.744L205.027 79.2316L207.211 81.1088C207.331 81.2315 207.421 81.3796 207.476 81.542C207.53 81.7045 207.548 81.8772 207.527 82.0474C207.527 82.9859 205.965 82.9859 205.338 82.9859H176.63L155.098 65.1367L137.619 51.0417V70.4607C137.934 75.1536 139.805 78.6005 146.357 80.785C146.982 81.1017 147.293 81.4138 147.293 82.038C147.293 82.9765 145.731 82.9765 145.104 82.9765H107.346C106.411 82.9765 104.849 82.9765 104.849 82.038C104.849 81.4138 105.475 81.0994 106.095 80.785C113.578 78.2837 114.513 74.5247 114.833 68.5836V14.407C114.52 8.77562 113.585 4.69988 106.095 2.20564C105.471 2.20564 104.849 1.57914 104.849 1.26707C104.849 0.016425 106.411 0.328499 107.346 0.328499H168.2C171.506 0.314295 174.782 0.953605 177.841 2.20992C180.901 3.46624 183.683 5.31496 186.031 7.65051C188.378 9.98606 190.244 12.7627 191.522 15.8219C192.799 18.881 193.464 22.1628 193.478 25.4798V25.691C193.502 32.3865 190.875 38.8175 186.175 43.5707C181.476 48.3238 175.088 51.0102 168.415 51.0394H148.539C149.474 52.9165 151.658 53.5454 153.529 54.4863C154.156 54.4863 154.464 54.8054 155.091 54.8054H155.093ZM155.093 45.0982H157.603C165.714 45.0982 172.582 36.3273 172.582 25.0528C172.568 14.0926 165.703 5.32638 157.603 5.32638H137.616V45.0982H155.093ZM50.5489 5.32872H32.7631V45.1006H53.362C61.7802 45.1006 68.3276 36.3297 68.3276 25.0551C68.3276 14.0973 61.7802 5.32872 53.362 5.32872H50.5489Z"
            fill="#272727"
          />
        </svg>
      ),
      titleButton: 'Explore',
      inverse: false,
    },
    {
      image1: 'https://i.ibb.co/SrdZVh9/1left.png',
      image2: 'https://i.ibb.co/2jQKwy5/1right.png',
      title: (
        <svg viewBox="0 0 531 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_4646)">
            <path
              d="M517.664 0.729028L505.218 0.687432V13.9128L517.664 13.8471V87.2929H530.112V0.729028H517.664ZM489.775 21.7701C489.775 10.2195 484.279 0 471.332 0C460.951 0 452.653 8.50094 452.653 18.8496V25.6561H465.099V18.5913C465.099 14.5784 467.531 12.3869 471.204 12.3869C477.306 12.3869 477.306 17.6039 477.306 21.9847C477.306 26.7288 477.306 29.1545 475.113 33.4061L452.653 75.5912V87.271H489.775V74.8622H467.314L485.626 39.7178C489.535 32.3312 489.775 30.1419 489.775 21.7701ZM372.631 39.396H365.55V12.4088H372.024C381.19 12.4088 382.645 17.153 382.645 25.9122C382.645 34.5226 381.321 39.396 372.631 39.396ZM395.114 26.1487C395.114 9.36133 387.902 0.729028 373.132 0.729028H353.104V87.2929H365.55V50.3445H373.001L384.601 87.3148H397.785L384.362 47.7896C392.29 43.4089 395.114 36.1099 395.114 26.1487ZM296.78 87.2929H333.904V74.8841H309.249V49.4863H330.732V37.8065H309.249V12.4088H333.904V0.729028H296.78V87.2929ZM254.968 61.1639H254.728L244.845 0.729028H231.661L249.364 87.2929H260.354L278.188 0.729028H265.004L254.968 61.1639ZM178.552 87.2929H215.673V74.8841H190.998V49.4863H212.481V37.8065H190.998V12.4088H215.653V0.729028H178.552V87.2929ZM135.979 39.396H128.898V12.4088H135.37C144.538 12.4088 145.993 17.153 145.993 25.9122C145.971 34.5226 144.646 39.396 135.979 39.396ZM158.439 26.1487C158.439 9.36133 151.227 0.729028 136.458 0.729028H116.429V87.2929H128.876V50.3445H136.327L147.925 87.3148H161.111L147.685 47.7896C155.637 43.4089 158.439 36.1099 158.439 26.1487ZM83.9573 66.8757C83.9573 72.8437 80.0456 75.635 75.5291 75.635C71.0105 75.635 67.101 72.8437 67.101 66.8757V21.1462C67.101 15.1782 71.0105 12.3869 75.5291 12.3869C80.0456 12.3869 83.9573 15.1782 83.9573 21.1462V66.8757ZM75.5291 0C65.3844 0 54.6548 7.0407 54.6548 21.1462V66.8538C54.6548 80.9593 65.4065 88 75.5291 88C85.6717 88 96.4034 80.9593 96.4034 66.8538V21.1462C96.4034 7.0407 85.6717 0 75.5291 0ZM0.112305 87.2929H12.5585V50.3445H34.0419V38.6647H12.5585V12.4088H37.2116V0.729028H0.112305V87.2929Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_4646">
              <rect width="530" height="88" fill="white" transform="translate(0.112305)" />
            </clipPath>
          </defs>
        </svg>
      ),
      titleButton: 'Explore Now',
      inverse: true,
    },
  ];
  return (
    <div>
      <Swiper {...settings}>
        {pp.map((val: object, id: number) => {
          return (
            <SwiperSlide key={`${val}__${id}`}>
              <Slide key={`${val}__${id}`} {...val}></Slide>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
