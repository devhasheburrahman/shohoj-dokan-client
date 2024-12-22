import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div className={clsx("copyright", spaceBottomClass, colorClass)}>
      <div className="footer-logo d-none d-lg-block">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img height={50} alt="" src="/logoFinal.png" />
        </Link>
      </div>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://www.shohojdokan.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Shohoj Dokan
        </a>
        All Rights Reserved
      </p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
};

export default FooterCopyright;
