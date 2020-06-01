import React from "react";
import { storiesOf } from "@storybook/react";
import ListItems from "./ListItems";
import CardItem from "components/molecules/CardItem";
import { product } from "components/molecules/CardItem/CardItem.stories";

storiesOf("Atoms|ListItems")
  .add("Default", () => (
    <ListItems>
      <div>
        <div style={{ backgroundColor: "#dedede", height: "301px" }}>here</div>
      </div>
      <div>
        <div style={{ backgroundColor: "#dedede", height: "301px" }}>here</div>
      </div>
      <div>
        <div style={{ backgroundColor: "#dedede", height: "301px" }}>here</div>
      </div>
      <div>
        <div style={{ backgroundColor: "#dedede", height: "301px" }}>here</div>
      </div>
      <div>
        <div style={{ backgroundColor: "#dedede", height: "301px" }}>here</div>
      </div>
      <div>
        <div style={{ backgroundColor: "#dedede", height: "301px" }}>here</div>
      </div>
      <div>
        <div style={{ backgroundColor: "#dedede", height: "301px" }}>here</div>
      </div>
      <div>
        <div style={{ backgroundColor: "#dedede", height: "301px" }}>here</div>
      </div>
    </ListItems>
  ))
  .add("List Items CardItem", () => (
    <ListItems>
      <CardItem
        name={product.name}
        price={product.price}
        to={`product/${product.slug}`}
        imageFluid={product.localImage.childImageSharp.fluid}
      ></CardItem>
      <CardItem
        name={product.name}
        price={product.price}
        to={`product/${product.slug}`}
        imageFluid={product.localImage.childImageSharp.fluid}
      ></CardItem>
      <CardItem
        name={product.name}
        price={product.price}
        to={`product/${product.slug}`}
        imageFluid={product.localImage.childImageSharp.fluid}
      ></CardItem>
      <CardItem
        name={product.name}
        price={product.price}
        to={`product/${product.slug}`}
        imageFluid={product.localImage.childImageSharp.fluid}
      ></CardItem>
      <CardItem
        name={product.name}
        price={product.price}
        to={`product/${product.slug}`}
        imageFluid={product.localImage.childImageSharp.fluid}
      ></CardItem>
    </ListItems>
  ));
