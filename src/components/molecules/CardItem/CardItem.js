import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Price from "components/atoms/Price";
import { CardItemLink, CardItemImageWrapper, CardItemInfos } from "./styled";

const CardItem = ({ to, imageFluid, name, price }) => {
  const data = useStaticQuery(graphql`
    query CardItemQuery {
      file(name: { eq: "placeholder" }) {
        childImageSharp {
          fluid(maxHeight: 250, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <CardItemLink to={to}>
      <CardItemImageWrapper>
        <Img
          fluid={imageFluid || data.file.childImageSharp.fluid}
          imgStyle={{ objectFit: "cover" }}
        />
      </CardItemImageWrapper>
      <CardItemInfos>
        <strong>{name}</strong>
        {price && <Price price={price} fontSize="1.2rem" hasSymbolBefore />}
      </CardItemInfos>
    </CardItemLink>
  );
};

CardItem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageFluid: PropTypes.object,
  price: Price.propTypes.price,
};
export default CardItem;
