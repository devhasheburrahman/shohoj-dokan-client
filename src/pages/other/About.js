import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";

const About = () => {
  let { pathname } = useLocation();

  useEffect(() => {
    if (!sessionStorage.getItem("isCategoryReload")) {
      sessionStorage.setItem("isCategoryReload", "true");
      window.location.reload();
    }
  }, []);

  return (
    <Fragment>
      <SEO
        titleTemplate="About us"
        description="About page of Shohoj Dokan Online Shop."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "About us", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

        {/* banner */}

        {/* text grid */}
        <TextGridOne spaceBottomClass="pb-70" />

        {/* fun fact */}
        {/* <FunFactOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          bgClass="bg-gray-3"
        /> */}

        {/* team member */}
        <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-70" />
        <FeatureIcon spaceTopClass="pt-50" spaceBottomClass="pb-60" />
      </LayoutOne>
    </Fragment>
  );
};

export default About;
