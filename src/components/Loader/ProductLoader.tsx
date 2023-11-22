import ContentLoader from 'react-content-loader';

const ProductLoader = () => (
  <ContentLoader
    style={{ backgroundColor: '#fff' }}
    speed={2}
    width={410}
    height={404}
    viewBox="0 0 410 404"
    backgroundColor="#cccccc"
    foregroundColor="#e8e8e8">
    <rect x="0" y="0" rx="10" ry="10" width="410" height="310" />
    <rect x="0" y="282" rx="0" ry="0" width="410" height="28" />
    <rect x="20" y="326" rx="12" ry="12" width="264" height="24" />
    <rect x="20" y="357" rx="8" ry="8" width="91" height="16" />
    <rect x="123" y="357" rx="8" ry="8" width="66" height="16" />
    <rect x="20" y="378" rx="10" ry="10" width="91" height="24" />
    <rect x="123" y="377" rx="10" ry="10" width="157" height="18" />
    <rect x="209" y="391" rx="0" ry="0" width="4" height="0" />
    <div style={{ backgroundColor: '#fff', width: '410', height: '404' }}></div>
  </ContentLoader>
);

export default ProductLoader;
