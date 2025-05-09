import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Logo = ({ imageUrl, logoClass }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className={clsx(logoClass)}
    >
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img height={50} alt="" src="/logoFinal.png" />
        {/* <p className="display-5">Dokan</p> */}

        {/* Shohodokan logo here  */}
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string,
};

export default Logo;
