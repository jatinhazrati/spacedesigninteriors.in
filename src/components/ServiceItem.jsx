import React from "react";
import PropTypes from "prop-types";

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col md:gap-12 gap-4 md:p-10 p-4 border border-primary-100">
      <img src={icon} width={48} height={48} alt={title} />
      <div className="flex flex-col gap-8">
        <p className="font-display md:text-display-md text-display-sm font-normal text-primary">
          {title}
        </p>
        <p className="text-body-lg font-light text-white">{description}</p>
      </div>
    </div>
  );
};

ServiceItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceItem;
