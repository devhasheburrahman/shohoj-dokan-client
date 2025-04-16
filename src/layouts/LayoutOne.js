import PropTypes from "prop-types";
import { Fragment } from "react";
import MobileBottomMenu from "../components/header/MobileBottomMenu";
import ScrollToTop from "../components/scroll-to-top";
import FooterOne from "../wrappers/footer/FooterOne";
import HeaderOne from "../wrappers/header/HeaderOne";

const LayoutOne = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass,
}) => {
  return (
    <Fragment>
      <div
        style={{
          minHeight: "100vh", // Ensures the layout takes up at least the full viewport height
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeaderOne
          layout={headerContainerClass}
          top={headerTop}
          headerPaddingClass={headerPaddingClass}
          headerPositionClass={headerPositionClass}
        />
        <main
          style={{
            flexGrow: 1, // Ensures that content fills available space
          }}
        >
          {children}
        </main>
        <FooterOne
          backgroundColorClass="bg-gray"
          spaceTopClass="pt-30"
          spaceBottomClass="pb-40"
        />
        <MobileBottomMenu />
        <ScrollToTop />
      </div>
    </Fragment>
  );
};

LayoutOne.propTypes = {
  children: PropTypes.node,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string,
};

export default LayoutOne;
