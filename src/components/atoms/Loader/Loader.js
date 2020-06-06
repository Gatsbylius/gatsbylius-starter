import React from "react";
import PropTypes from "prop-types";
import { StyledLoadingIcon } from "./styled";

const Loader = ({ size = "1.25rem", color = "#fff" }) => {
  return <StyledLoadingIcon size={size} color={color} />;
};

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Loader;
