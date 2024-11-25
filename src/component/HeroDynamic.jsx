import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

function HeroDynamic({ heading, subheading, headingClass, subheadingClass }) {
  return (
    <div className="flex-grow flex items-center mt-8">
      <div className="w-full text-left lg:w-1/2 ml-16 ">
        {/* Dynamic Heading */}
        <Typography variant="h1" color="white" className={`mb-6 font-black ${headingClass}`}>
          {heading}
        </Typography>

        {/* Dynamic Subheading */}
        <Typography variant="lead" color="white" className={`opacity-80 mt-8 ${subheadingClass}`}>
          {subheading}
        </Typography>
      </div>
    </div>
  );
}

HeroDynamic.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  headingClass: PropTypes.string,
  subheadingClass: PropTypes.string,
};

HeroDynamic.defaultProps = {
  headingClass: "",
  subheadingClass: "",
};

export default HeroDynamic;
