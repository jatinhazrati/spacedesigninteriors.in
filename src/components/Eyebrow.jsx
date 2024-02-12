import React from "react";
import PropTypes from "prop-types";

const Eyebrow = ({ label }) => {
  return (
    <div className="flex flex-row items-center">
      <hr className="w-16 text-primary"></hr>
      <p className="text-body-sm font-semibold tracking-widest text-primary pl-4">
        {label}
      </p>
    </div>
  );
};

Eyebrow.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Eyebrow;
