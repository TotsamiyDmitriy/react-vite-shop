import React from 'react';
import { CartProductType, ProductType } from '../types/MainTypes';
import { useParams } from 'react-router-dom';
import { Tabs } from '../components/';
import { Scroller } from '../components/';
import '../scss/pages/product.scss';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchSingleProduct } from '../redux/productSlice';
import Rating from '@mui/material/Rating';
import { addItems } from '../redux/cartSlice';
import { useSnackbar } from 'notistack';

interface IProduct {
  products: ProductType[];
}

const allSizes = ['XS', 'S', 'M', 'L', 'XL'];

const Product: React.FC<IProduct> = () => {
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  const state = useAppSelector(({ productReducer }) => ({
    singleProduct: productReducer.singleProduct,
    isLoaded: productReducer.isLoaded,
  }));
  const [imageId, setImageId] = React.useState(0);
  const [selectSizeId, setSelectSizeId] = React.useState(NaN);
  const [selectColorId, setSelectColorId] = React.useState(0);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function addToCart(item: CartProductType) {
    dispatch(addItems(item));
  }

  const action = (snackbarId: any) => (
    <>
      <button
        id="modalBtnClose"
        onClick={() => {
          closeSnackbar(snackbarId);
        }}>
        Close
      </button>
    </>
  );

  if (!state.isLoaded) {
    return <div className="">Loading...</div>;
  } else if (state.singleProduct === null || state.singleProduct.length === 0) {
    return <div>Soorryyy</div>;
  } else if (id !== undefined) {
    const singleProduct = state.singleProduct[0] as ProductType;
    const sizesKeys = Object.keys(singleProduct.sizes);
    const colorsKeys = Object.keys(singleProduct.colors);

    const price = singleProduct.price - (singleProduct.price * singleProduct.offers) / 100;

    const cartItem = {
      id: `${singleProduct.id}`,
      newId: 0,
      count: 1,
      name: singleProduct.name,
      brandName: singleProduct.brandName,
      soldBy: singleProduct.soldBy,
      rating: singleProduct.rating,
      price: price,
      offers: singleProduct.offers,
      photos: singleProduct.photos,
      size: allSizes[selectSizeId],
      color: colorsKeys[selectColorId],
    };

    return (
      <>
        <div className="product">
          <div className="product_images">
            <div className="product_images__selectImage">
              {singleProduct.photos.map((url: string, index: number) => {
                return (
                  <div className="product_images__selectImage_item">
                    <img
                      src={url}
                      alt="none"
                      className="product_images__selectImage_item_image"
                      onClick={() => setImageId(index)}
                    />
                  </div>
                );
              })}
            </div>
            <img src={singleProduct.photos[imageId]} alt="" className="product_images__mainImage" />
          </div>
          <div className="product_info">
            <h2 className="product_info__title">{singleProduct.name}</h2>
            <p className="product_info__brandName">{singleProduct.brandName}</p>
            <p className="product_info__seller">{`Sold By: ${singleProduct.soldBy}`}</p>
            <div className="product_info__rating">
              <span className="product_info__rating_element">
                <Rating
                  defaultValue={singleProduct.rating}
                  precision={0.5}
                  readOnly
                  size="small"></Rating>
                {singleProduct.rating}
              </span>
              <span className="product_info__rating_element">{`${singleProduct.reviewsCount} rewiews`}</span>
            </div>
            <div className="product_info__price">
              <span className="product_info__price_currentPrice">{`Rs. ${price}`}</span>
              <span className="product_info__price_oldPrice">
                <s>{singleProduct.price}</s>
              </span>
              <span className="product_info__price_offer">{`(${singleProduct.offers}% off)`}</span>
            </div>
            <div className="product_info__sizes">
              <span className="product_info__sizes_title">Select Size</span>
              <p className="product_info__sizes_chart">
                <a href="">{`Size Chart >`}</a>
              </p>
              <div className="product_info__sizes_sizes">
                {allSizes.map((size: string, id: number) => {
                  if (sizesKeys.includes(size)) {
                    return (
                      <div
                        key={size}
                        className={`product_info__sizes_sizes_size ${
                          !Number.isNaN(selectSizeId) && selectSizeId === id ? 'active' : ''
                        }`}
                        onClick={() => setSelectSizeId(id)}>
                        <span>{size}</span>
                      </div>
                    );
                  } else {
                    return (
                      <div key={size} className="product_info__sizes_sizes_size disabled">
                        <span>{size}</span>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="product_info__colors">
              <p className="product_info__colors_title">Select Color</p>
              <div className="product_info__colors_colors">
                {colorsKeys.map((color: string, id: number) => {
                  return (
                    <div
                      key={`${color}_${id}`}
                      className={`product_info__colors_colors_wrapper ${
                        selectColorId === id ? 'active' : ''
                      }`}>
                      <div
                        key={`${color}_${id}`}
                        className={`product_info__colors_colors_wrapper_color`}
                        style={{ backgroundColor: `${singleProduct.colors[color]}` }}
                        onClick={() => setSelectColorId(id)}></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="product_info__offers">
              <p className="product_info__offers_title">Best Offers</p>
              <ul className="product_info__offers_list">
                <li className="product_info__offers_offer">
                  <b>Special offer </b> get 25% off
                </li>
                <li className="product_info__offers_offer">
                  <b>Bank offer</b> get 30% off on Axis Bank Credit card
                </li>
                <li className="product_info__offers_offer">
                  <b>Wallet offer </b>get 40% cashback via Paytm wallet on first transaction
                </li>
                <li className="product_info__offers_offer">
                  <b>Special offer </b>get 25% off
                </li>
              </ul>
            </div>
            <div className="product_info__buttons">
              <button
                className="product_info__buttons_toCart"
                onClick={() => {
                  if (!Number.isNaN(selectSizeId)) {
                    console.log(cartItem);
                    addToCart(cartItem);
                    enqueueSnackbar('Add to cart succsess', { action, variant: 'success' });
                  } else {
                    enqueueSnackbar('Choose your size', { variant: 'error' });
                  }
                }}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <Tabs rewiews={singleProduct.reviews} allRating={singleProduct.rating}></Tabs>
        <Scroller offerType={'product'} title="Similar Products"></Scroller>
        <Scroller offerType={'product'} title="Customer Also Like"></Scroller>
      </>
    );
  }
};

export default Product;
