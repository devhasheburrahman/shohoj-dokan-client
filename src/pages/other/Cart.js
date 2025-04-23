import { Fragment, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SEO from "../../components/seo";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
} from "../../store/slices/cart-slice";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

import axios from "axios";
import DistrictSelector from "../../components/DistrictSelector";
import { Base_Url } from "../../Config/config";

const Cart = () => {
  let cartTotalPrice = 0;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [quantityCount] = useState(1);
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setcouponDiscount] = useState("");
  const [couponPrice, setCouponPrice] = useState(0);
  const { cartItems } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  useEffect(() => {
    const isReloaded = sessionStorage.getItem("isCategoryReload");
    if (!isReloaded) {
      // console.log("ssss");
      window.location.reload();
      sessionStorage.setItem("isCategoryReload", true);
    }
    return () => {
      sessionStorage.removeItem("isCategoryReload");
    };
  }, []);

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    if (!name || !phone || !selectedDistrict || !selectedDivision || !address) {
      toast.error("Please fill in all In your Address.");
      return;
    }
    try {
      const productData = {
        name: name,
        phone: phone,
        address: address,
        selectedDistrict: selectedDistrict,
        selectedDivision: selectedDivision,
        totalWithDelivery: cartTotalPrice,
        deliveryCharge: deliveryCharge,
        products: cartItems,
        subTotal: Math.round(
          (couponPrice > 0 ? couponPrice : cartTotalPrice) + deliveryCharge
        ),
        // subTotal: cartTotalPrice + deliveryCharge,
        couponTotal: couponDiscount,
      };
      try {
        const response = await axios.post(
          // "http://localhost:5000/api/v1/order/create-order",
          `${Base_Url}/api/createOrder`,
          productData
        );
        console.warn({ productData });
        // console.log(response.data.orders._id);
        navigate(`/thanks/${response.data.orders._id}`);

        toast.success("Successfully Create Order", {});

        // console.log(response.data);
        // navigate(`/thanks/${response.data.orderProduct._id}`);
      } catch (error) {
        toast.error("Error creating order:", error);
      }
    } catch (error) {
      toast.error("Error preparing order data:", error);
    }
    window.location.reload();
  };

  const calculateDiscount = (code) => {
    // Manually define the coupon codes and their values
    const couponCodes = {
      shohojdokan30: 30,
      fazlulkorim30: 30,
      nimur30: 30,
      Hasib20: 20,
    };

    // Check if the code is in the couponCodes object
    if (code in couponCodes) {
      return couponCodes[code];
    } else {
      return 0;
    }
  };

  const handleCouponSubmit = (e) => {
    e.preventDefault();

    // Get the coupon code from your input field
    // const couponCode = document.getElementById("couponCode").value; // Replace with your actual input ID

    // Calculate the discount amount using the coupon code
    const discountAmount = calculateDiscount(couponCode);
    console.log({ discountAmount });
    // Update the coupon discount state
    setcouponDiscount(discountAmount);

    // Calculate the new discounted price
    const newDiscountedPrice = cartTotalPrice - discountAmount;
    setCouponPrice(newDiscountedPrice);
  };

  const deliveryCharge =
    selectedDistrict.toLowerCase() === "dhaka" ||
    selectedDistrict.toLowerCase() === "kurigram"
      ? 60
      : 80;

  console.log({ cartTotalPrice, couponPrice });
  console.log(Math.round(cartTotalPrice + deliveryCharge));
  return (
    <Fragment>
      <SEO
        titleTemplate="Checkout Pages"
        description="Cart page of Shohoj Dokan Online Shop BD."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Cart", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="cart-main-area">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">Your cart items</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                            <th>action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((cartItem, key) => {
                            const discountedPrice = getDiscountPrice(
                              cartItem.price,
                              cartItem.discount
                            );
                            const finalProductPrice = cartItem.price;
                            const finalDiscountedPrice = discountedPrice;

                            discountedPrice != null
                              ? (cartTotalPrice +=
                                  finalDiscountedPrice * cartItem?.quantity)
                              : (cartTotalPrice +=
                                  finalProductPrice * cartItem?.quantity);
                            console.log({ cartTotalPrice, couponPrice });
                            console.log(
                              Math.round(cartTotalPrice + deliveryCharge)
                            );
                            return (
                              <tr key={key}>
                                <td className="product-thumbnail">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/products/" +
                                      cartItem._id
                                    }
                                  >
                                    <img
                                      className="img-fluid"
                                      src={cartItem.image}
                                      alt=""
                                    />
                                  </Link>
                                </td>

                                <td className="product-name">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/products/" +
                                      cartItem._id
                                    }
                                  >
                                    {cartItem.name}
                                  </Link>
                                  {cartItem.selectedProductSize ? (
                                    <div className="cart-item-variation">
                                      {/* <span>
                                        Color: {cartItem.selectedProductColor}
                                      </span> */}
                                      <span>
                                        Size: {cartItem.selectedProductSize}
                                      </span>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </td>

                                <td className="product-price-cart">
                                  {discountedPrice !== null ? (
                                    <Fragment>
                                      <span className="amount old">
                                        {Math.round(finalProductPrice)}
                                      </span>
                                      <span className="amount">
                                        {Math.round(finalDiscountedPrice)}
                                      </span>
                                    </Fragment>
                                  ) : (
                                    <span className="amount">
                                      {finalProductPrice}
                                    </span>
                                  )}
                                </td>

                                <td className="product-quantity">
                                  <div className="cart-plus-minus">
                                    <button
                                      className="dec qtybutton"
                                      onClick={() =>
                                        dispatch(decreaseQuantity(cartItem))
                                      }
                                    >
                                      -
                                    </button>
                                    <input
                                      className="cart-plus-minus-box"
                                      type="text"
                                      value={cartItem.quantity}
                                      readOnly
                                    />
                                    <button
                                      className="inc qtybutton"
                                      onClick={() =>
                                        dispatch(
                                          addToCart({
                                            ...cartItem,
                                            quantity: quantityCount,
                                          })
                                        )
                                      }
                                      // disabled={
                                      //   cartItem !== undefined &&
                                      //   cartItem.quantity &&
                                      //   cartItem.quantity
                                      // }
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td className="product-subtotal">
                                  {Math.round(
                                    discountedPrice !== null
                                      ? finalDiscountedPrice * cartItem.quantity
                                      : finalProductPrice * cartItem.quantity
                                  )}
                                </td>

                                <td className="product-remove">
                                  <button
                                    onClick={() =>
                                      dispatch(
                                        deleteFromCart(cartItem.cartItemId)
                                      )
                                    }
                                  >
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-shiping-update-wrapper">
                      <div className="cart-shiping-update">
                        <Link to={process.env.PUBLIC_URL + "/shop"}>
                          Continue Shopping
                        </Link>
                      </div>
                      <div className="cart-clear">
                        <button onClick={() => dispatch(deleteAllFromCart())}>
                          Clear Shopping Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="row mt-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="cart-tax">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Your Personal Information
                        </h4>
                      </div>
                      <div className="tax-wrapper">
                        <div>
                          <div className="tax-select">
                            <label>*Your Name</label>
                            <input
                              value={name}
                              type="text"
                              placeholder="Write Your Name"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="tax-select">
                            <label>*Your Phone Number</label>
                            <input
                              value={phone}
                              type="number"
                              placeholder="012345.."
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                          <DistrictSelector
                            selectedDistrict={selectedDistrict}
                            setSelectedDistrict={setSelectedDistrict}
                            selectedDivision={selectedDivision}
                            districts={districts}
                            setDistricts={setDistricts}
                            setSelectedDivision={setSelectedDivision}
                            divisions={divisions}
                            setDivisions={setDivisions}
                          />

                          <div className="tax-select">
                            <label>*Your Address</label>
                            <input
                              value={address}
                              type="text"
                              placeholder="Write Your Address with your Upozala"
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Cupon code  */}
                  <div className="col-lg-4 col-md-6">
                    <div className="discount-code-wrapper">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Use Coupon Code
                        </h4>
                      </div>
                      <div className="discount-code">
                        <p>Enter your coupon code if you have one.</p>
                        <form onSubmit={handleCouponSubmit}>
                          <input
                            type="text"
                            required
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            name="name"
                          />
                          <button className="cart-btn-2" type="submit">
                            Apply Coupon
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12">
                    <div className="grand-totall">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gary-cart">
                          Cart Total
                        </h4>
                      </div>
                      <h5>
                        Total products{" "}
                        <span> ৳{Math.round(cartTotalPrice)}</span>
                      </h5>
                      <h5>
                        Delivery Charge
                        <span> ৳{deliveryCharge}</span>
                      </h5>

                      <h5 className="grand-totall-title1">
                        Total
                        <span>
                          ৳{Math.round(cartTotalPrice + deliveryCharge)}
                        </span>
                      </h5>
                      {couponPrice && (
                        <h5 className="grand-totall-title1">
                          Coupon Discount
                          <span>
                            ৳ {Math.round(cartTotalPrice - couponPrice)}
                          </span>
                        </h5>
                      )}
                      {couponPrice && (
                        <h4 className="grand-totall-title">
                          Grand Total{" "}
                          <span>
                            {" "}
                            ৳{Math.round(couponPrice + deliveryCharge)}{" "}
                          </span>
                        </h4>
                      )}
                      <Link onClick={handleCreateOrder}>Proceed to Order</Link>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cart"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart <br />
                      <Link to={process.env.PUBLIC_URL + "/products"}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Toaster />
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Cart;
