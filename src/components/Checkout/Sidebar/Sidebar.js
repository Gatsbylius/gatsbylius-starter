import React from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";
import { Row, Col } from "styled-bootstrap-grid";
import { getTotal, priceParser } from "../../../helpers/cartHelper";
import { navigate } from "gatsby";
import {
  SidebarContainer,
  ArticlesNumber,
  Title,
  HeadContainer,
  Divider,
  FinalPrice,
  ButtonContainer,
} from "./styled";
import { useStoreStateContext } from "../../../context/StoreContext";
import SidebarItem from "./SidebarItem";
import Button from "../../shared/Button";

const Sidebar = ({ isCartPage = false }) => {
  const storeState = useStoreStateContext();
  const items = _get(storeState, "products", []);

  return (
    <SidebarContainer>
      <Row>
        <HeadContainer>
          <Title>Shopping Cart</Title>
          <ArticlesNumber>{items.length}</ArticlesNumber>
        </HeadContainer>
        <Divider />
      </Row>
      {items.map(item => {
        return (
          <SidebarItem key={item.id} item={item} isCartPage={isCartPage} />
        );
      })}
      <Row>
        <Divider />
      </Row>
      <Row>
        <Col>
          <FinalPrice>
            <span>Total</span>
            <span>{priceParser(getTotal(items), storeState.currency)}</span>
          </FinalPrice>
        </Col>
      </Row>
      {isCartPage && (
        <Row>
          <ButtonContainer>
            <Button onClick={() => navigate("/checkout/customer")}>
              Go to checkout
            </Button>
          </ButtonContainer>
        </Row>
      )}
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isCartPage: PropTypes.bool,
};

export default Sidebar;
