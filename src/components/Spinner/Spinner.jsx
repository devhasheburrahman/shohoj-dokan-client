import React from "react"; // Import SCSS file

export default function Spinner() {
  return (
    <div className="text-center  pt-5 pb-5">
      <div className="loader">
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
        <div className="ring ring3"></div>
        <div className="ring ring4"></div>
        <div className="ring ring5"></div>
        {/* Add logo in the center */}
        <img
          className="loader-image"
          src={`${process.env.PUBLIC_URL}/shohojdokan-productloader.png`}
          alt="Logo"
        />
      </div>
    </div>
  );
}
