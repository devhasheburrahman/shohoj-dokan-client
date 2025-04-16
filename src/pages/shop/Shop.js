/* eslint-disable no-unused-vars */
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Paginator from "react-hooks-paginator";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import Spinner from "../../components/Spinner/Spinner";
import { Base_Url } from "../../Config/config";
import { getSortedProducts } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ShopProducts from "../../wrappers/product/ShopProducts";
import ShopTopbar from "../../wrappers/product/ShopTopbar";

const Shop = () => {
  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [products, setProduct] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const { data } = await axios.get(`${Base_Url}/api/getProduct`);
        // console.log(data);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        toast.error(error);
      }
    };

    getAllProduct();
  }, []);

  // const { products } = useSelector((state) => state.product);

  const pageLimit = 30;
  let { pathname } = useLocation();

  const getLayout = (layout) => {
    setLayout(layout);
  };

  // const getSortParams = (sortType, sortValue) => {
  //   setSortType(sortType);
  //   setSortValue(sortValue);
  // };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  useEffect(() => {
    const isReloaded = sessionStorage.getItem("isCategoryReload");
    if (!isReloaded) {
      window.location.reload();
      sessionStorage.setItem("isCategoryReload", true);
    }
    return () => {
      sessionStorage.removeItem("isCategoryReload");
    };
  }, []);

  return (
    <Fragment>
      <SEO
        titleTemplate="Shop Products"
        description="Shop Products of Shohoj Dokan Online Shop BD."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Shop Products", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        {loading ? (
          <Spinner />
        ) : (
          <div className="shop-area">
            <div className="container">
              <div className="row">
                {/* <div className="col-lg-3 order-2 order-lg-1">
            shop sidebar
            <ShopSidebar
              products={products}
              getSortParams={getSortParams}
              sideSpaceClass="mr-30"
            />
          </div> */}
                <div className="col-lg-12 order-1 order-lg-2">
                  {/* shop topbar default */}
                  <ShopTopbar
                    getLayout={getLayout}
                    getFilterSortParams={getFilterSortParams}
                    productCount={products.length}
                    sortedProductCount={currentData.length}
                  />

                  {/* shop page content default */}

                  <ShopProducts layout={layout} products={currentData} />

                  {/* shop product pagination */}
                  <div className="pro-pagination-style text-center mt-30">
                    <Paginator
                      totalRecords={sortedProducts.length}
                      pageLimit={pageLimit}
                      pageNeighbours={2}
                      setOffset={setOffset}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      pageContainerClass="mb-0 mt-0"
                      pagePrevText="«"
                      pageNextText="»"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </LayoutOne>
    </Fragment>
  );
};

export default Shop;
