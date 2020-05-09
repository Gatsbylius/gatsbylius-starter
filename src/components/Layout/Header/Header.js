import React, { Fragment, useRef, useState } from "react";
import PropTypes from "prop-types";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { useMedia, useClickAway } from "react-use";
import {
  Header as StyledHeader,
  MenuButtonWrapper,
  UserAccountButton,
  Logo,
  Nav,
  NavLink,
  NavList,
  NavItem,
  NavLinkTouch,
  NavListTouch,
  NavItemTouch
} from "./styled";
import IconButton from "components/shared/IconButton";
import SlideMenu from "components/SlideMenu";
import MiniCart from "components/MiniCart/MiniCart";
import MiniCartButton from "components/MiniCart/MiniCartButton";

const Header = ({ siteTitle = "", menuLinks }) => {
  const isWide = useMedia("(min-width: 769px)");
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  useClickAway(ref, () => {
    if (isOpen) {
      toggleIsOpen();
    }
  });

  return (
    <>
      <StyledHeader>
        {!isWide && (
          <MenuButtonWrapper>
            {!isOpen && (
              <IconButton onClick={toggleIsOpen} icon={IoIosMenu} size={30} />
            )}
          </MenuButtonWrapper>
        )}
        <Logo to="/">{siteTitle}</Logo>
        <Nav>
          <NavList>
            {isWide &&
              menuLinks.map(({ node }) => (
                <Fragment key={`wide-${node.code}`}>
                  <NavItem>
                    <NavLink
                      activeClassName="active"
                      to={`/categories/${node.code}`}
                    >
                      {node.name}
                    </NavLink>
                  </NavItem>
                  {/* --------- Fixtures --------- */}
                  <NavItem>
                    <NavLink to="/">Frames</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/">Contact</NavLink>
                  </NavItem>
                  {/* ---------------------------- */}
                </Fragment>
              ))}
            <div>
              <MiniCartButton />
            </div>
            {isWide && (
              <div>
                <UserAccountButton>
                  <FiUser />
                </UserAccountButton>
              </div>
            )}
          </NavList>
        </Nav>
      </StyledHeader>

      {!isWide && (
        <SlideMenu forwardRef={ref} isOpen={isOpen} toggleIsOpen={toggleIsOpen}>
          <MenuButtonWrapper>
            <IconButton onClick={toggleIsOpen} icon={IoMdClose} size={30} />
          </MenuButtonWrapper>
          <NavListTouch>
            {menuLinks.map(({ node }) => (
              <Fragment key={`touch-${node.code}`}>
                <NavItemTouch>
                  <NavLinkTouch
                    activeClassName="active"
                    to={`/categories/${node.code}`}
                  >
                    {node.name}
                  </NavLinkTouch>
                </NavItemTouch>
                {/* --------- Fixtures --------- */}
                <NavItemTouch>
                  <NavLinkTouch to="/">Frames</NavLinkTouch>
                </NavItemTouch>
                <NavItemTouch>
                  <NavLinkTouch to="/">Contact</NavLinkTouch>
                </NavItemTouch>
                {/* ---------------------------- */}
                <NavItemTouch>
                  <NavLinkTouch to="/">My account</NavLinkTouch>
                </NavItemTouch>
              </Fragment>
            ))}
          </NavListTouch>
        </SlideMenu>
      )}

      <MiniCart />
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array.isRequired
};

export default Header;
