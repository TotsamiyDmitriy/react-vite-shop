import ContentLoader from 'react-content-loader';

const OfferLoader = () => (
  <ContentLoader
    style={{ backgroundColor: '#fff' }}
    speed={2}
    width={489}
    height={567}
    viewBox="0 0 489 567"
    backgroundColor="#cccccc"
    foregroundColor="#e8e8e8">
    <rect x="209" y="391" rx="0" ry="0" width="4" height="0" />
    <rect x="0" y="0" rx="10" ry="10" width="489" height="310" />
    <rect x="0" y="274" rx="0" ry="0" width="489" height="37" />
    <rect x="140" y="340" rx="10" ry="10" width="209" height="62" />
    <rect x="99" y="447" rx="10" ry="10" width="292" height="42" />
    <rect x="122" y="518" rx="12" ry="12" width="244" height="24" />
    <div style={{ backgroundColor: '#fff', width: '489', height: '567' }}></div>
  </ContentLoader>
);

export default OfferLoader;
