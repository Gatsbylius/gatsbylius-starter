import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { spacing } from "../../helpers/themeHelpers";

const StyledMotionDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 450px;
  max-width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  padding: ${spacing(["xs", "xs", "md"])};
  background: white;
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  z-index: 25;
`;

const variants = {
  open: { x: 0 },
  closed: { x: -450 },
};

const SlideMenu = ({ isOpen, forwardRef, children }) => (
  <StyledMotionDiv
    ref={forwardRef}
    style={{ x: -400 }}
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    variants={variants}
    transition={{ duration: 0.25 }}
  >
    {children}
  </StyledMotionDiv>
);

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
