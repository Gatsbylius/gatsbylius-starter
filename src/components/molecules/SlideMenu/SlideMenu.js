import React from "react";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import IconButton from "components/atoms/IconButton";
import { StyledMenu, MenuButtonWrapper } from "./styled";

const SlideMenu = ({ children, toggleIsOpen, isOpen = false }) => {
  return (
    <StyledMenu className={isOpen ? "open" : "closed"}>
      <MenuButtonWrapper>
        <IconButton name="close" onClick={toggleIsOpen} icon={IoMdClose} />
      </MenuButtonWrapper>
      {children}
    </StyledMenu>
  );
};

SlideMenu.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
};

export default SlideMenu;
