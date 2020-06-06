import React from "react";
import Slider from "react-slick";
import { Link } from "gatsby";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  RelatedProductsStyled,
  RelatedProductsItemTitle,
  RelatedProductsImage,
} from "./styled";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const RelatedProducts = ({ data }) => {
  return (
    <RelatedProductsStyled>
      <h4>Similar Products</h4>
      <Slider {...settings}>
        {data.category.products
          .filter((product) => data.product.name !== product.name)
          .map((product) => {
            return (
              <Link to={`/product/${product.slug}`} key={product.slug}>
                <RelatedProductsImage
                  sizes={{
                    ...product.localImage.childImageSharp.fluid,
                    aspectRatio: 2 / 2,
                  }}
                />
                <RelatedProductsItemTitle>
                  {product.name}
                </RelatedProductsItemTitle>
              </Link>
            );
          })}
      </Slider>
    </RelatedProductsStyled>
  );
};

export default RelatedProducts;
