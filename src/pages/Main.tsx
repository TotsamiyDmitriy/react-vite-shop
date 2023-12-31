import {
  Slider,
  Slide,
  Scroller,
  ScrollerBlog,
  TradeSlider,
  Categories,
  CommentSlider,
  Services,
  AboutUs,
} from '../components';

function Main() {
  const pp = {
    image2: 'https://i.ibb.co/ncw4XHK/Rectangle-376.png',
    title: (
      <svg
        width="531"
        height="88"
        viewBox="0 0 531 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
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
    titleButton: 'Explore',
    inverse: true,
    banner: true,
  };

  const blogs = [
    {
      category: 'Blog',
      title: 'Discover new way to decorate your home .',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna quis leo dictum dignissim id ut ex. Sed non aliquet nunc. Maecenas semper tortor et arcu ultrices tristique non at orci. Vivamus tempor facilisis erat. Nullam congue sapien sit amet elit ullamcorper mollis. Vestibulum fermentum, magna ac rutrum semper, orci ante iaculis felis, sed aliquet ipsum nulla at mauris. In rhoncus, ipsum in ultrices aliquam, leo quam molestie ex, sollicitudin vestibulum eros metus eu orci. Praesent enim nibh, efficitur ut bibendum condimentum, efficitur ut lorem. Donec faucibus congue ultrices. Curabitur interdum eros nec sem vulputate, ac maximus orci suscipit. Aenean nec sollicitudin mauris, at laoreet erat. Sed sagittis, eros sed dignissim malesuada, nisl elit consectetur eros, eu vestibulum magna velit quis ipsum.',
      author: 'Souha . H',
      date: '23.01.2012',
      image: 'https://i.ibb.co/TKgm555/Rectangle-395.png',
    },
    {
      category: 'Blog',
      title: 'Discover new way to decorate your home .',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna quis leo dictum dignissim id ut ex. Sed non aliquet nunc. Maecenas semper tortor et arcu ultrices tristique non at orci. Vivamus tempor facilisis erat. Nullam congue sapien sit amet elit ullamcorper mollis. Vestibulum fermentum, magna ac rutrum semper, orci ante iaculis felis, sed aliquet ipsum nulla at mauris. In rhoncus, ipsum in ultrices aliquam, leo quam molestie ex, sollicitudin vestibulum eros metus eu orci. Praesent enim nibh, efficitur ut bibendum condimentum, efficitur ut lorem. Donec faucibus congue ultrices. Curabitur interdum eros nec sem vulputate, ac maximus orci suscipit. Aenean nec sollicitudin mauris, at laoreet erat. Sed sagittis, eros sed dignissim malesuada, nisl elit consectetur eros, eu vestibulum magna velit quis ipsum.',
      author: 'Souha . H',
      date: '23.01.2012',
      image: 'https://i.ibb.co/6vxn0LK/Rectangle-395-1.png',
    },
    {
      category: 'Blog',
      title: 'Discover new way to decorate your home .',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna quis leo dictum dignissim id ut ex. Sed non aliquet nunc. Maecenas semper tortor et arcu ultrices tristique non at orci. Vivamus tempor facilisis erat. Nullam congue sapien sit amet elit ullamcorper mollis. Vestibulum fermentum, magna ac rutrum semper, orci ante iaculis felis, sed aliquet ipsum nulla at mauris. In rhoncus, ipsum in ultrices aliquam, leo quam molestie ex, sollicitudin vestibulum eros metus eu orci. Praesent enim nibh, efficitur ut bibendum condimentum, efficitur ut lorem. Donec faucibus congue ultrices. Curabitur interdum eros nec sem vulputate, ac maximus orci suscipit. Aenean nec sollicitudin mauris, at laoreet erat. Sed sagittis, eros sed dignissim malesuada, nisl elit consectetur eros, eu vestibulum magna velit quis ipsum.',
      author: 'Souha . H',
      date: '23.01.2012',
      image: 'https://i.ibb.co/TKgm555/Rectangle-395.png',
    },
  ];

  return (
    <div className="Main" id="root">
      <Slider></Slider>
      <Scroller offerType={'product'} title="Trending Now"></Scroller>
      <Scroller offerType={'offer'} title="Deals of the Day"></Scroller>
      <TradeSlider title={'Trending Offers'}></TradeSlider>
      <Slide {...pp}></Slide>
      <Categories title="Shop by Categories"></Categories>
      <CommentSlider></CommentSlider>
      <ScrollerBlog blogs={blogs} title="Featured Blogs"></ScrollerBlog>
      <Services></Services>
      <AboutUs></AboutUs>
    </div>
  );
}

export default Main;
