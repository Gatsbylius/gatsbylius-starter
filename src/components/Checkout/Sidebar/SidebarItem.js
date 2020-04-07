import React from "react";
import PropTypes from "prop-types";

import {
  useStoreStateContext,
  useStoreDispatchContext,
} from "../../../context/StoreContext";
import { priceParser } from "../../../helpers/cartHelper";
import { FaChevronLeft, FaChevronRight, FaTimesCircle } from "react-icons/fa";
import {
  incrementQty,
  decrementQty,
  removeItemFromCart,
} from "../../../services/cart";
import { Item } from "./styled";

const SidebarItem = ({ item, isCartPage }) => {
  const storeDispatch = useStoreDispatchContext();
  const storeState = useStoreStateContext();

  return (
    <Item key={item.id}>
      <img src={item.product.images[0].cachedPath} alt={item.product.name} />
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
  item: PropTypes.object.isRequired,
};

export default SidebarItem;
