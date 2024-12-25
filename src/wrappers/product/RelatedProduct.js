import axios from "axios";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Base_Url } from "../../Config/config";
import ProductRating from "../../components/product/sub-components/ProductRating";
import SectionTitle from "../../components/section-title/SectionTitle";

export default function RelatedProduct({ category, spaceBottomClass }) {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const { data } = await axios.get(`${Base_Url}/api/getProduct`);
        // console.log(data);
        setProduct(data);
      } catch (error) {
        toast.error("Error fetching  data:", error);
      }
    };

    getAllProduct();
  }, []);

  const relatesProduct = product.filter(
    (item) => item.category === `${category}`
  );

  const limitedProduct = relatesProduct.slice(0, 20);

  const handleClick = (id, name) => {
    navigate(`/products/${id}/${name}`);
    window.location.reload();
  };

  // console.log(limitedProduct);

  // console.log(relatesProduct);
  // console.log(category);
  // console.log(product);
  return (
    <div className={clsx("related-product-area", spaceBottomClass)}>
      <div className="container">
        <SectionTitle
          titleText="Related Products"
          positionClass="text-center"
          spaceClass="mb-50 mt-50"
        />
        <Row xs={2} sm={3} md={4} lg={4} className="xs:g-2 g-2 h-75">
          {limitedProduct.map((p) => (
            <Col className={clsx("product-wrap")} key={p._id}>
              <Card onClick={() => handleClick(p._id, p.name)}>
                <div className="product-img">
                  <Link to={process.env.PUBLIC_URL + "/products/" + p._id}>
                    {/* Display placeholder initially */}
                    <img
                      className="default-img"
                      src={`${process.env.PUBLIC_URL}/shohojdokan-product-loader.png`}
                      alt={p.name}
                      style={{ display: "block" }}
                    />
                    {/* Once loaded, show the actual image */}
                    <img
                      className="default-img"
                      src={p.image}
                      alt={p.name}
                      onLoad={(e) =>
                        (e.currentTarget.previousSibling.style.display = "none")
                      }
                      style={{ display: "block" }}
                    />
                  </Link>
                  {p.discount || p.new ? (
                    <div className="product-img-badges">
                      {p.discount ? (
                        <span className="pink">-{p.discount}%</span>
                      ) : (
                        ""
                      )}
                      {p.new ? <span className="purple">New</span> : ""}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="product-content text-center mb-3">
                  <h3>
                    <Link to={process.env.PUBLIC_URL + "/products/" + p._id}>
                      {p.name.slice(0, 16)} {p.name.length > 17 ? ".." : ""}
                    </Link>
                  </h3>
                  {p.rating && p.rating > 0 ? (
                    <div className="product-rating">
                      <ProductRating ratingValue={p.rating} />
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="product-price">
                    {p.price !== null ? (
                      <Fragment>
                        {Math.round(p.price - (p.price / 100) * p.discount)}

                        <span className="old">৳ {p.price}</span>
                      </Fragment>
                    ) : (
                      <span>৳{p.price} </span>
                    )}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

RelatedProduct.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};
