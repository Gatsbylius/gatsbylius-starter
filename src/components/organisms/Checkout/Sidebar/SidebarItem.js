import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight, FaTimesCircle } from "react-icons/fa";
import {
  useStoreStateContext,
  useStoreDispatchContext
} from "context/StoreContext";
import { priceParser } from "helpers/cartHelper";
import { incrementQty, decrementQty, removeItemFromCart } from "services/cart";
import { Item } from "./styled";

const SidebarItem = ({ item, isCartPage }) => {
  const { allProduct } = useStaticQuery(
    graphql`
      query {
        allProduct {
          edges {
            node {
              code
              localImage {
                childImageSharp {
                  fixed(height: 96, width: 96) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const storeDispatch = useStoreDispatchContext();
  const storeState = useStoreStateContext();

  const productImage = allProduct.edges.find(
    ({ node }) => node.code === item.product.code
  );

  return (
    <Item key={item.id}>
      <Img
        fixed={productImage.node.localImage.childImageSharp.fixed}
        alt={item.product.name}
      />
      <div className="item-datas">
        <div className="item-name-delete">
          <span>{item.product.name}</span>
          {isCartPage && (
            <FaTimesCircle
              onClick={() =>
                removeItemFromCart(item.id, storeState, storeDispatch)
              }
              className="item-delete-icon"
              fontSize="1.2rem"
            />
          )}
        </div>
        <div className="item-price-qty">
          <span className="item-price">
            {priceParser(item.total, storeState.currency)}
          </span>
          {isCartPage ? (
            <div className="item-qty">
              <span>Qty</span>
              <div className="item-dec-inc">
                <span
                  className="icon"
                  role="button"
                  tabIndex={0}
                  onKeyDown={() =>
                    decrementQty(item.id, storeState, storeDispatch)
                  }
                  onClick={() =>
                    decrementQty(item.id, storeState, storeDispatch)
                  }
                >
                  <FaChevronLeft fontSize="1.3rem" />
                </span>
                <span>{item.quantity}</span>
                <span
                  className="icon"
                  role="button"
                  tabIndex={0}
                  onKeyDown={() =>
                    incrementQty(item.id, storeState, storeDispatch)
                  }
                  onClick={() =>
                    incrementQty(item.id, storeState, storeDispatch)
                  }
                >
                  <FaChevronRight fontSize="1.3rem" />
                </span>
              </div>
            </div>
          ) : (
            <span className="item-qty">Qty {item.quantity}</span>
          )}
        </div>
      </div>
    </Item>
  );
};

SidebarItem.propTypes = {
  isCartPage: PropTypes.bool,
  item: PropTypes.object.isRequired
};

export default SidebarItem;
