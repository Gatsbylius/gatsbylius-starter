import React from "react";
import { navigate } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import MiniCartItem from "components/molecules/MiniCartItem";
import Button from "components/atoms/Button";
import FormAction from "components/atoms/Form/FormAction";
import Price from "components/atoms/Price";
import {
  useStoreDispatchContext,
  useStoreStateContext
} from "context/StoreContext";
import { getTotal } from "helpers/cartHelper";
import {
  MiniCartHeader,
  MiniCartItems,
  MiniCartTotal,
  MiniCart as MinicartComponent
} from "./styled";

const miniCartRef = React.createRef();

const MiniCart = ({ open = false }) => {
  const { allProduct } = useStaticQuery(
    graphql`
      query {
        allProduct {
          edges {
            node {
              code
              localImage {
                childImageSharp {
                  fixed(height: 60, width: 60) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const storeState = useStoreStateContext();
  const storeDispatch = useStoreDispatchContext();

  if (storeState.miniCartIsOpen || open) {
    if (
      typeof window !== "undefined" &&
      document.getElementsByTagName("main")[0] &&
      storeState.miniCartIsOpen
    ) {
      document
        .getElementsByTagName("main")[0]
        .addEventListener("mousedown", e => {
          if (miniCartRef.current && !miniCartRef.current.contains(e.target)) {
            storeDispatch({ type: "toggleMiniCart" });
          }
        });
    }

    return (
      <MinicartComponent ref={miniCartRef}>
        <MiniCartHeader>
          <MiniCartTotal>
            Subtotal:{" "}
            <Price
              price={{
                current: getTotal(storeState.products),
                currency: storeState.currency
              }}
              fontSize="1rem"
              hasSymbolBefore
            />
          </MiniCartTotal>
        </MiniCartHeader>
        <MiniCartItems>
          {storeState.products.map(item => {
            const productImage = allProduct.edges.find(
              ({ node }) => node.code === item.product.code
            );

            return (
              <MiniCartItem
                key={item.id}
                fixedImage={productImage.node.localImage.childImageSharp.fixed}
                name={item.product.name}
                quantity={item.quantity}
                price={{
                  current: item.total / item.quantity,
                  currency: storeState.currency
                }}
              />
            );
          })}
        </MiniCartItems>
        <FormAction>
          <Button
            onClick={() => {
              storeDispatch({ type: "toggleMiniCart" });
              navigate("/cart");
            }}
          >
            Go to cart
          </Button>
        </FormAction>
      </MinicartComponent>
    );
  }

  return null;
};

export default MiniCart;
