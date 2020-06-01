import React from "react";
import PropTypes from "prop-types";
import Section from "components/molecules/Section";
import { StyledAsideMenu } from "./styled";

const AsideMenu = ({ children, title }) => {
  return (
    <StyledAsideMenu>
      <Section title={title} raw>
        {children}
      </Section>
    </StyledAsideMenu>
  );
};

AsideMenu.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default AsideMenu;
