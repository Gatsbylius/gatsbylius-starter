import React from "react";
import PropTypes from "prop-types";
import { List } from "./styled";

const ListItem = ({ children, small = false }) => {
  return <List small={small}>{children}</List>;
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
};

export default ListItem;
