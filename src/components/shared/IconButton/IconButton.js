import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const IconButton = ({ icon: Icon, ...props }) => {
  return (
    <Button>
      <Icon {...props} />
    </Button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.func.isRequired,
};

export default IconButton;
