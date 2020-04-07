import styled from "styled-components";
import { color, spacing } from "../../helpers/themeHelpers";

export const ProductTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.6rem;
  line-height: 1.3;
  text-transform: none;
`;

export const Sku = styled.small`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${color("greyMedium")};
`;

export const PricePanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing(["xs"])};
`;

export const LearnMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 1rem;
  border: none;
  cursor: pointer;
  margin: ${spacing(["xs", "none"])};
  display: block;
  color: ${color("white")};
  background-color: ${color("secondary")};
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${color("secondaryDark")};
  }
`;
