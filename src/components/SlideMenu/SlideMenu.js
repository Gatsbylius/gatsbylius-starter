import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacing } from "../../helpers/themeHelpers";

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  transform: translateX(-450px);
  width: 450px;
  max-width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  padding: ${spacing(["xs", "xs", "md"])};
  background: white;
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  z-index: 25;
  transition: transform 0.25s;

  &.open {
    transform: translateX(0);
  }
`;

const SlideMenu = ({ isOpen, forwardRef, children }) => {
  return (
    <StyledDiv ref={forwardRef} className={isOpen ? "open" : "closed"}>
      {children}
    </StyledDiv>
  );
};

SlideMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  /* TODO: fix SSR problem with typeof Element === 'undefined'
  forwardRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]), */
  children: PropTypes.node.isRequired,
};

export default SlideMenu;
