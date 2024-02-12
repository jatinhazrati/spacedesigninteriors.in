import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, link, size, icon, onClick }) => (
  <a
    className={`button flex gap-1 items-center justify-center bg-primary text-black font-semibold  ${
      size === "lg" ? "px-6 py-4 text-body-md" : "px-5 py-3 text-body-sm"
    }`}
    href={link}
    onClick={onClick}
  >
    {label}
    {icon === true ? (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1668 5.83301L5.8335 14.1663"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.6665 5.83301H14.1665V13.333"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      ""
    )}
  </a>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;