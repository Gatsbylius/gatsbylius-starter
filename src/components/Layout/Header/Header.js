import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { useMedia, useClickAway } from "react-use";
import { useCycle } from "framer-motion";
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
import IconButton from "../../shared/IconButton";
import SlideMenu from "../../SlideMenu";
import MiniCart from "./../../MiniCart/MiniCart";
import MiniCartButton from "./../../MiniCart/MiniCartButton";

const Header = ({ siteTitle = ``, menuLinks }) => {
  const isWide = useMedia("(min-width: 769px)");
  const ref = useRef(null);
  const [isOpen, toggleIsOpen] = useCycle(false, true);

  useClickAway(ref, () => {
    if (isOpen) {
      toggleIsOpen();
    }
  });

  return (
    <div>
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
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array.isRequired,
};

export default Header;
