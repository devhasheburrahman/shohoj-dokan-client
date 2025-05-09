import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDiscountPrice } from "../../../helpers/product";
import { deleteFromCart } from "../../../store/slices/cart-slice";

const MenuCart = () => {
  const dispatch = useDispatch();
  // const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  let cartTotalPrice = 0;

  const handleClick = () => {
    window.location.reload();
  };
  return (
    <div className="shopping-cart-content">
      {cartItems && cartItems.length > 0 ? (
        <Fragment>
          <ul>
            {cartItems.map((item) => {
              const discountedPrice = getDiscountPrice(
                item?.price,
                item?.discount
              );
              const finalProductPrice = item?.price;
              const finalDiscountedPrice = discountedPrice;

              discountedPrice != null
                ? (cartTotalPrice += finalDiscountedPrice * item?.quantity)
                : (cartTotalPrice += finalProductPrice * item?.quantity);

              return (
                <li className="single-shopping-cart" key={item.cartItemId}>
                  <div className="shopping-cart-img">
                    <Link
                      to={process.env.PUBLIC_URL + "/products/" + item?._id}
                    >
                      <img alt="" src={item.image} className="img-fluid" />
                    </Link>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <Link
                        to={process.env.PUBLIC_URL + "/products/" + item._id}
                      >
                        {" "}
                        {item.name}{" "}
                      </Link>
                    </h4>
                    <h6>Qty : {item.quantity}</h6>
                    <span>
                      {" "}
                      ৳ :
                      {discountedPrice !== null
                        ? finalDiscountedPrice
                        : finalProductPrice}
                    </span>
                    {item.selectedProductSize ? (
                      <div className="cart-item-variation">
                        {/* <span>Color: {item.selectedProductColor}</span> */}
                        <span>Size: {item.selectedProductSize}</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="shopping-cart-delete">
                    <button
                      onClick={() => dispatch(deleteFromCart(item.cartItemId))}
                    >
                      <i className="fa fa-times-circle" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="shopping-cart-total">
            <h4>
              Total :{" "}
              <span className="shop-total">
                {" "}
                ৳ : {Math.round(cartTotalPrice)}
              </span>
            </h4>
          </div>
          <div className="shopping-cart-btn btn-hover text-center">
            <div
              onClick={() => {
                handleClick();
              }}
            >
              <Link
                className="default-btn"
                to={process.env.PUBLIC_URL + "/cart"}
              >
                view cart
              </Link>
            </div>
            <div
              onClick={() => {
                handleClick();
              }}
            >
              <Link
                className="default-btn"
                to={process.env.PUBLIC_URL + "/cart"}
              >
                checkout
              </Link>
            </div>
          </div>
        </Fragment>
      ) : (
        <p className="text-center">No items added to cart</p>
      )}
    </div>
  );
};

export default MenuCart;
