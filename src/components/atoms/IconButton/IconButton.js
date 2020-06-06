import React from "react";
import PropTypes from "prop-types";
import Button from "components/atoms/Button";
import { IconButtonStyled } from "./styled";

const IconButton = ({
  icon: Icon,
  onClick,
  children,
  size = "1.25rem",
  name = null,
}) => {
  return (
    <IconButtonStyled aria-label={name} onClick={onClick}>
      <Icon size={size} />
      {children && <span>{children}</span>}
    </IconButtonStyled>
  );
};

IconButton.propTypes = {
  ...Button.propTypes,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  children: PropTypes.node,
  size: PropTypes.string,
};

export default IconButton;
