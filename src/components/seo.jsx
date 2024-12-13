import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO = ({ title, titleTemplate, description }) => {
  // Ensure titleTemplate and title are always strings
  const fullTitle = `${titleTemplate || "Shohojdokan"} | ${
    title || "Product Page"
  }`;

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{fullTitle}</title>
        <meta
          name="description"
          content={description || "Product page of Shohoj Dokan Online Shop."}
        />
      </Helmet>
    </HelmetProvider>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  title: "Shohojdokan",
  titleTemplate: "Product Page",
  description: "Product page of Shohoj Dokan Online Shop.",
};

export default SEO;
