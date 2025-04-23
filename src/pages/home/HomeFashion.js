import { Fragment, useEffect, useState } from "react";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import SEO from "../../components/seo";
import Spinner from "../../components/Spinner/Spinner"; // Import Spinner component
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import TabProduct from "../../wrappers/product/TabProduct";

const HomeFashion = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state to manage loader visibility

  useEffect(() => {
    const isReloaded = sessionStorage.getItem("isCategoryReload");
    if (!isReloaded) {
      window.location.reload();
      sessionStorage.setItem("isCategoryReload", true);
    }
    // Simulate loading by hiding the loader after a set time
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false once data is ready
    }, 2000); // Set the delay as per your requirements (2 seconds)

    return () => {
      clearTimeout(timer); // Cleanup the timer on unmount
      sessionStorage.removeItem("isCategoryReload");
    };
  }, []);

  return (
    <Fragment>
      <SEO
        titleTemplate="Fashion Home"
        description="Fashion home of Shohoj Dokan Online Shop BD."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* Conditionally render the spinner */}
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {/* Show page content after loading */}
            <HeroSliderOne />

            <CategoryProduct />

            <TabProduct spaceBottomClass="pb-60 pt-40" category="fashion" />
          </>
        )}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
