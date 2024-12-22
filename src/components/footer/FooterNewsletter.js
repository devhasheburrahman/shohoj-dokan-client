import clsx from "clsx";
import PropTypes from "prop-types";
import PaymentMethod from "./PaymentMethod";

const FooterNewsletter = ({
  spaceBottomClass,
  spaceLeftClass,
  sideMenu,
  colorClass,
  widgetColorClass,
}) => {
  return (
    <div
      className={clsx(
        "footer-widget",
        spaceBottomClass,
        sideMenu ? "ml-ntv5" : spaceLeftClass,
        widgetColorClass
      )}
    >
      {/*  */}
      <div className="mt-3">
        <PaymentMethod />
      </div>
    </div>
  );
};

FooterNewsletter.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  colorClass: PropTypes.string,
  widgetColorClass: PropTypes.string,
};

export default FooterNewsletter;
