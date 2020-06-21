import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardItem from "components/molecules/CardItem";
import { SliderStyled, RelatedProductsStyled } from "./styled";

const settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  infinite: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const RelatedProducts = ({ data }) => {
  if (!data.category || !data.category.products) {
    return null;
  }

  return (
    <RelatedProductsStyled>
      <h4>Similar Products</h4>
      <SliderStyled {...settings}>
        {data.category.products
          .filter((product) => data.product.name !== product.name)
          .map((product) => {
            return (
              <CardItem
                key={product.id}
                to={`/product/${product.slug}`}
                imageFluid={
                  product.thumbnail && product.thumbnail.childImageSharp.fluid
                }
                name={product.name}
                price={product.variants[0].price}
              />
            );
          })}
      </SliderStyled>
    </RelatedProductsStyled>
  );
};

export default RelatedProducts;
