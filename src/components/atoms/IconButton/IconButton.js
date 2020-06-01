import React from "react";
import PropTypes from "prop-types";
import Button from "components/atoms/Button";
import { IconButtonStyled } from "./styled";

const IconButton = ({ icon: Icon, onClick, children, size = "1.25rem" }) => {
  return (
    <IconButtonStyled onClick={onClick}>
      <Icon size={size} />
      {children && <span>{children}</span>}
    </IconButtonStyled>
  );
};

IconButton.propTypes = {
  ...Button.propTypes,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  size: PropTypes.string
};

export default IconButton;
