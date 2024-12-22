import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu,
}) => {
  return (
    <footer
      className={clsx(
        "footer-area",
        backgroundColorClass,
        spaceTopClass,
        spaceBottomClass,
        extraFooterClass,
        spaceLeftClass,
        spaceRightClass
      )}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="footer">
          <div className="container">
            <div className="row">
              {/* ABOUT US */}
              <div className="col-4 ">
                <div className="footer-widget">
                  <div className="footer-title">
                    <h5 className="fw-bold">ABOUT US</h5>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/store-location">Store location</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/tracking">Orders tracking</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* FOLLOW US */}
              <div className="col-4 ">
                <div className="footer-widget">
                  <div className="footer-title">
                    <h5 className="fw-bold">FOLLOW US</h5>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/facebook">Facebook</Link>
                    </li>
                    <li>
                      <Link to="/instagram">Instagram</Link>
                    </li>
                    <li>
                      <Link to="/twitter">Twitter</Link>
                    </li>
                    <li>
                      <Link to="/linkedin">LinkedIn</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* SUPPORT */}
              <div className="col-4 ">
                <div className="footer-widget">
                  <div className="footer-title">
                    <h5 className="fw-bold">SUPPORT</h5>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/faqs">FAQs</Link>
                    </li>
                    <li>
                      <Link to="/support">Support Center</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/returns">Returns</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row flex-lg-row flex-column align-items-center">
          {/* Footer Newsletter */}
          <div className="col-lg-6">
            <FooterNewsletter sideMenu={sideMenu} />
          </div>

          {/* Footer Copyright */}
          <div className="col-lg-6 mb-3">
            <FooterCopyright footerLogo="/assets/img/logo/logo.png" />
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
};

export default FooterOne;
