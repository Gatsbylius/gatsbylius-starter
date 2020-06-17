import React, { Fragment, useRef, useState } from "react";
import PropTypes from "prop-types";
import { IoIosMenu } from "react-icons/io";
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
  NavItemTouch,
} from "./styled";
import IconButton from "components/atoms/IconButton";
import SlideMenu from "components/molecules/SlideMenu";
import MiniCart from "components/organisms/MiniCart";
import MiniCartButton from "components/molecules/MiniCartButton";

const Header = ({ siteTitle = "", menuLinks }) => {
  const isWide = useMedia("(min-width: 769px)");
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

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
              <IconButton
                name="menu"
                onClick={toggleIsOpen}
                icon={IoIosMenu}
                size={30}
              />
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
                    <NavLink activeClassName="active" to={`/${node.slug}`}>
                      {node.name}
                    </NavLink>
                  </NavItem>
                </Fragment>
              ))}
            {isWide && (
              <>
                <NavItem>
                  <NavLink to="/">Frames</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">Contact</NavLink>
                </NavItem>
              </>
            )}
            <NavItem>
              <MiniCartButton />
            </NavItem>
            {isWide && (
              <NavItem>
                <UserAccountButton aria-label="account">
                  <FiUser />
                </UserAccountButton>
              </NavItem>
            )}
          </NavList>
        </Nav>
      </StyledHeader>

      {!isWide && (
        <SlideMenu forwardRef={ref} isOpen={isOpen} toggleIsOpen={toggleIsOpen}>
          <NavListTouch>
            {menuLinks.map(({ node }) => (
              <Fragment key={`touch-${node.code}`}>
                <NavItemTouch>
                  <NavLinkTouch activeClassName="active" to={`/${node.slug}`}>
                    {node.name}
                  </NavLinkTouch>
                </NavItemTouch>
              </Fragment>
            ))}
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
          </NavListTouch>
        </SlideMenu>
      )}

      <MiniCart />
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array.isRequired,
};

export default Header;
