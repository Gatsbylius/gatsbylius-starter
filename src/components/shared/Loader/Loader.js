import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LoadingIcon = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  border-top: 2px solid ${({ color }) => color};
  border-right: 2px solid transparent;
  animation: spinner 0.6s linear infinite;
`;

const Loader = ({ size = "20px", color = "white" }) => {
  return <LoadingIcon size={size} color={color} />;
};

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Loader;
