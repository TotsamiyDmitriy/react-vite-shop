import React from 'react';
import styles from '../scss/components/services.module.scss';

type ppType = {
  svg: React.ReactElement;
  title: string;
  description: string;
};

const services = [
  {
    svg: (
      <svg
        width="46"
        height="56"
        viewBox="0 0 46 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M44.723 0.2975C44.9618 0.457231 45.1576 0.673293 45.2931 0.926611C45.4286 1.17993 45.4997 1.46271 45.5 1.75V28C45.4999 28.3495 45.3952 28.6909 45.1993 28.9804C45.0035 29.2698 44.7254 29.494 44.401 29.624L43.75 28L44.401 29.624L44.3905 29.6275L44.3695 29.638L44.289 29.6695C43.8289 29.8524 43.3656 30.0274 42.8995 30.1945C41.9755 30.527 40.691 30.975 39.235 31.4195C36.379 32.3015 32.6585 33.25 29.75 33.25C26.7855 33.25 24.332 32.27 22.197 31.4125L22.099 31.3775C19.88 30.485 17.99 29.75 15.75 29.75C13.3 29.75 10.017 30.555 7.2205 31.4195C5.96839 31.8097 4.72772 32.2357 3.5 32.697V54.25C3.5 54.7141 3.31563 55.1592 2.98744 55.4874C2.65925 55.8156 2.21413 56 1.75 56C1.28587 56 0.840752 55.8156 0.512563 55.4874C0.184375 55.1592 0 54.7141 0 54.25V1.75C0 1.28587 0.184375 0.840752 0.512563 0.512563C0.840752 0.184374 1.28587 0 1.75 0C2.21413 0 2.65925 0.184374 2.98744 0.512563C3.31563 0.840752 3.5 1.28587 3.5 1.75V2.737C4.291 2.4605 5.236 2.142 6.265 1.827C9.121 0.952 12.845 0 15.75 0C18.69 0 21.084 0.9695 23.1735 1.8165L23.324 1.8795C25.501 2.758 27.398 3.5 29.75 3.5C32.2 3.5 35.483 2.695 38.2795 1.8305C39.8731 1.33284 41.448 0.777139 43.001 0.1645L43.0675 0.14L43.0815 0.133H43.085L44.723 0.2975ZM42 4.2735C41.23 4.5465 40.32 4.858 39.319 5.166C36.484 6.048 32.767 6.9965 29.75 6.9965C26.649 6.9965 24.178 5.9955 22.0395 5.1275L22.0115 5.117C19.817 4.235 17.9865 3.5 15.75 3.5C13.4085 3.5 10.129 4.3015 7.2975 5.173C6.02038 5.56704 4.75409 5.99536 3.5 6.4575V28.973C4.27 28.7 5.18 28.3885 6.181 28.0805C9.016 27.195 12.733 26.25 15.75 26.25C18.7145 26.25 21.168 27.23 23.303 28.0875L23.401 28.1225C25.62 29.015 27.51 29.75 29.75 29.75C32.088 29.75 35.371 28.9485 38.2025 28.077C39.4796 27.6829 40.7459 27.2546 42 26.7925V4.277V4.2735Z"
          fill="#444E66"
        />
      </svg>
    ),
    title: 'Locally Owned',
    description: 'We have local business and sell best quality clothes',
  },
  {
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M7 28H28V31.5H7V28Z" fill="#444E66" />
        <path d="M3.5 19.25H21V22.75H3.5V19.25Z" fill="#444E66" />
        <path
          d="M52.3581 29.0605L47.1081 16.8105C46.9734 16.4956 46.7491 16.2273 46.4632 16.0388C46.1773 15.8502 45.8423 15.7498 45.4999 15.75H40.2499V12.25C40.2499 11.7859 40.0655 11.3408 39.7373 11.0126C39.4091 10.6844 38.964 10.5 38.4999 10.5H10.4999V14H36.7499V35.973C35.9524 36.436 35.2546 37.0524 34.6965 37.7864C34.1384 38.5205 33.7312 39.3578 33.4984 40.25H22.5014C22.0754 38.6003 21.0625 37.1627 19.6523 36.2064C18.2422 35.2502 16.5318 34.8411 14.8416 35.0558C13.1514 35.2705 11.5976 36.0942 10.4713 37.3726C9.34501 38.651 8.72363 40.2962 8.72363 42C8.72363 43.7038 9.34501 45.349 10.4713 46.6274C11.5976 47.9058 13.1514 48.7295 14.8416 48.9442C16.5318 49.1589 18.2422 48.7498 19.6523 47.7936C21.0625 46.8373 22.0754 45.3997 22.5014 43.75H33.4984C33.879 45.2519 34.7497 46.584 35.9725 47.5356C37.1953 48.4871 38.7004 49.0037 40.2499 49.0037C41.7993 49.0037 43.3044 48.4871 44.5272 47.5356C45.75 46.584 46.6207 45.2519 47.0014 43.75H50.7499C51.214 43.75 51.6591 43.5656 51.9873 43.2374C52.3155 42.9093 52.4999 42.4641 52.4999 42V29.75C52.4999 29.5129 52.4517 29.2783 52.3581 29.0605ZM15.7499 45.5C15.0576 45.5 14.3809 45.2947 13.8054 44.9101C13.2298 44.5256 12.7812 43.9789 12.5163 43.3394C12.2514 42.6999 12.1821 41.9961 12.3171 41.3172C12.4522 40.6383 12.7855 40.0146 13.275 39.5251C13.7645 39.0356 14.3881 38.7023 15.067 38.5673C15.746 38.4322 16.4497 38.5015 17.0892 38.7664C17.7288 39.0313 18.2754 39.4799 18.66 40.0555C19.0446 40.6311 19.2499 41.3078 19.2499 42C19.2489 42.928 18.8799 43.8177 18.2237 44.4739C17.5675 45.13 16.6778 45.4991 15.7499 45.5ZM40.2499 19.25H44.3449L48.0969 28H40.2499V19.25ZM40.2499 45.5C39.5576 45.5 38.8809 45.2947 38.3054 44.9101C37.7298 44.5256 37.2812 43.9789 37.0163 43.3394C36.7514 42.6999 36.6821 41.9961 36.8171 41.3172C36.9522 40.6383 37.2855 40.0146 37.775 39.5251C38.2645 39.0356 38.8881 38.7023 39.567 38.5673C40.246 38.4322 40.9497 38.5015 41.5892 38.7664C42.2288 39.0313 42.7754 39.4799 43.16 40.0555C43.5446 40.6311 43.7499 41.3078 43.7499 42C43.7489 42.928 43.3799 43.8177 42.7237 44.4739C42.0675 45.13 41.1778 45.4991 40.2499 45.5ZM48.9999 40.25H47.0014C46.6159 38.751 45.7439 37.4223 44.522 36.4722C43.3002 35.5221 41.7976 35.0043 40.2499 35V31.5H48.9999V40.25Z"
          fill="#444E66"
        />
      </svg>
    ),
    title: 'Fast Delivery',
    description: 'We provide fast delivery to our customers',
  },
  {
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.7343 5.92625C26.4274 5.54134 27.2072 5.33936 28 5.33936C28.7928 5.33936 29.5726 5.54134 30.2657 5.92625L47.8007 15.6656C48.1642 15.8677 48.4671 16.1634 48.678 16.522C48.8888 16.8805 49 17.2889 49 17.7049V36.9199C48.9998 37.7521 48.7771 38.5691 48.3549 39.2862C47.9328 40.0034 47.3265 40.5946 46.599 40.9986L30.2657 50.0753C29.5726 50.4602 28.7928 50.6621 28 50.6621C27.2072 50.6621 26.4274 50.4602 25.7343 50.0753L9.401 40.9986C8.67383 40.5948 8.06781 40.0039 7.64567 39.2872C7.22353 38.5705 7.00061 37.754 7 36.9223V17.7049C6.99998 17.2889 7.11117 16.8805 7.32204 16.522C7.5329 16.1634 7.83579 15.8677 8.19933 15.6656L25.7367 5.92625H25.7343Z"
          stroke="#444E66"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 28.0002V51.3335M7 16.3335L28 28.0002L7 16.3335ZM28 28.0002L49 16.3335L28 28.0002Z"
          stroke="#444E66"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 22.1667L38.5 10.5"
          stroke="#444E66"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 28.7644L21 32.6657"
          stroke="#444E66"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Easy Return',
    description: 'We provide easy return policy.',
  },
  {
    svg: (
      <svg
        width="49"
        height="36"
        viewBox="0 0 49 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40.25 18V16.25C40.25 12.0728 38.5906 8.06677 35.6369 5.11307C32.6832 2.15937 28.6772 0.5 24.5 0.5C20.3228 0.5 16.3168 2.15937 13.3631 5.11307C10.4094 8.06677 8.75 12.0728 8.75 16.25V18C6.42936 18 4.20376 18.9219 2.56282 20.5628C0.921872 22.2038 0 24.4294 0 26.75C0 29.0706 0.921872 31.2962 2.56282 32.9372C4.20376 34.5781 6.42936 35.5 8.75 35.5H12.25V16.25C12.25 13.0011 13.5406 9.88526 15.8379 7.58794C18.1353 5.29062 21.2511 4 24.5 4C27.7489 4 30.8647 5.29062 33.1621 7.58794C35.4594 9.88526 36.75 13.0011 36.75 16.25V35.5H40.25C42.5706 35.5 44.7962 34.5781 46.4372 32.9372C48.0781 31.2962 49 29.0706 49 26.75C49 24.4294 48.0781 22.2038 46.4372 20.5628C44.7962 18.9219 42.5706 18 40.25 18ZM3.5 26.75C3.5 25.3576 4.05312 24.0223 5.03769 23.0377C6.02226 22.0531 7.35761 21.5 8.75 21.5V32C7.35761 32 6.02226 31.4469 5.03769 30.4623C4.05312 29.4777 3.5 28.1424 3.5 26.75ZM40.25 32V21.5C41.6424 21.5 42.9777 22.0531 43.9623 23.0377C44.9469 24.0223 45.5 25.3576 45.5 26.75C45.5 28.1424 44.9469 29.4777 43.9623 30.4623C42.9777 31.4469 41.6424 32 40.25 32Z"
          fill="#444E66"
        />
      </svg>
    ),
    title: 'Online Support',
    description: 'We give 24/7 online support',
  },
  {
    svg: (
      <svg
        width="47"
        height="48"
        viewBox="0 0 47 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M43.7229 23.9996L46.2989 19.5476C46.6085 19.012 46.6927 18.3753 46.533 17.7776C46.3733 17.1799 45.9828 16.6701 45.4472 16.3603L40.9906 13.7843V8.65094C40.9906 8.0321 40.7447 7.43861 40.3072 7.00102C39.8696 6.56344 39.2761 6.3176 38.6572 6.3176H33.5262L30.9526 1.86327C30.6417 1.32874 30.1329 0.938118 29.5362 0.775938C29.2403 0.695709 28.9314 0.675021 28.6274 0.715075C28.3233 0.755128 28.0303 0.855126 27.7652 1.00927L23.3086 3.58527L18.8519 1.00694C18.316 0.697533 17.6791 0.613686 17.0814 0.773841C16.4836 0.933996 15.974 1.32504 15.6646 1.86094L13.0886 6.3176H7.95758C7.33874 6.3176 6.74525 6.56344 6.30766 7.00102C5.87008 7.43861 5.62424 8.0321 5.62424 8.65094V13.7819L1.16758 16.3579C0.901653 16.5109 0.668573 16.7149 0.481729 16.9582C0.294885 17.2015 0.157959 17.4794 0.078819 17.7758C-0.000321038 18.0722 -0.0201157 18.3813 0.0205722 18.6853C0.0612601 18.9894 0.161628 19.2824 0.315911 19.5476L2.89191 23.9996L0.315911 28.4516C0.00788492 28.9877 -0.0756876 29.6239 0.0834141 30.2214C0.242516 30.8189 0.631388 31.3293 1.16524 31.6413L5.62191 34.2173V39.3483C5.62191 39.9671 5.86774 40.5606 6.30533 40.9982C6.74291 41.4358 7.33641 41.6816 7.95524 41.6816H13.0886L15.6646 46.1383C15.8712 46.4914 16.1661 46.7847 16.5204 46.9892C16.8747 47.1938 17.2761 47.3026 17.6852 47.3049C18.0912 47.3049 18.4949 47.1976 18.8542 46.9899L23.3062 44.4139L27.7629 46.9899C28.2987 47.2989 28.9351 47.3828 29.5327 47.2231C30.1302 47.0634 30.64 46.6733 30.9502 46.1383L33.5239 41.6816H38.6549C39.2738 41.6816 39.8672 41.4358 40.3048 40.9982C40.7424 40.5606 40.9882 39.9671 40.9882 39.3483V34.2173L45.4449 31.6413C45.7104 31.4879 45.943 31.2836 46.1295 31.0403C46.316 30.7969 46.4527 30.5192 46.5318 30.2229C46.6109 29.9267 46.6308 29.6178 46.5905 29.3139C46.5501 29.0099 46.4502 28.7169 46.2966 28.4516L43.7229 23.9996ZM17.4729 12.3096C18.4015 12.3099 19.2919 12.6791 19.9483 13.3359C20.6046 13.9927 20.9732 14.8834 20.9729 15.8119C20.9726 16.7405 20.6034 17.6309 19.9466 18.2873C19.2898 18.9437 18.3991 19.3122 17.4706 19.3119C16.542 19.3116 15.6516 18.9425 14.9952 18.2856C14.3388 17.6288 13.9703 16.7382 13.9706 15.8096C13.9709 14.881 14.3401 13.9906 14.9969 13.3342C15.6537 12.6779 16.5443 12.3093 17.4729 12.3096ZM18.1729 34.7096L14.4396 31.9119L28.4396 13.2453L32.1729 16.0429L18.1729 34.7096ZM29.1396 35.6429C28.6798 35.6428 28.2246 35.5521 27.7998 35.376C27.3751 35.1999 26.9892 34.9419 26.6642 34.6166C26.3392 34.2914 26.0814 33.9054 25.9056 33.4805C25.7298 33.0557 25.6394 32.6004 25.6396 32.1406C25.6397 31.6808 25.7304 31.2256 25.9065 30.8009C26.0826 30.3761 26.3406 29.9903 26.6659 29.6652C26.9911 29.3402 27.3771 29.0825 27.802 28.9067C28.2268 28.7309 28.6821 28.6405 29.1419 28.6406C30.0705 28.6409 30.9609 29.0101 31.6173 29.6669C32.2736 30.3237 32.6422 31.2144 32.6419 32.1429C32.6416 33.0715 32.2724 33.9619 31.6156 34.6183C30.9588 35.2747 30.0681 35.6432 29.1396 35.6429Z"
          fill="#444E66"
        />
      </svg>
    ),
    title: 'Best Offers',
    description: 'We give best offers to our customers',
  },
];

const Services: React.FC = () => {
  return (
    <div className={styles.root}>
      {services.map((val: ppType, id: number) => {
        return (
          <div key={`div${val}__${id}`} className={styles.card}>
            <div key={`div1${val}__${id}`} className={styles.cardIcon}>
              {val.svg}
            </div>
            <h4 key={`h${val}__${id}`} className={styles.cardTitle}>
              {val.title}
            </h4>
            <p key={`p${val}__${id}`} className={styles.cardDesc}>
              {val.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
