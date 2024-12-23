import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeroSliderOneSingle = ({ data }) => {
  return (
    <Link
      to={`/category/${data.name}`}
      className="single-slider slider-height-1"
    >
      <div className="slider-single-img">
        <img
          className="animated img-fluid w-100"
          src={data.image}
          alt={data.title}
        />
      </div>
    </Link>
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
};

export default HeroSliderOneSingle;
