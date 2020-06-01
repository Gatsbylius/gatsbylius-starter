import React from "react";
import PropTypes from "prop-types";
import { FiShoppingCart } from "react-icons/fi";
import Loader from "components/atoms/Loader";
import IconButton from "components/atoms/IconButton";

const AddToCart = ({ onClick, loading = false }) => {
  return (
    <IconButton icon={loading ? Loader : FiShoppingCart} onClick={onClick}>
      Add to cart
    </IconButton>
  );
};

AddToCart.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

export default AddToCart;
