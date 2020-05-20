import styled from "styled-components";
import Img from "gatsby-image";
import { color } from "helpers/themeHelpers";

export const MiniCartImage = styled(Img)`
  margin-top: 10px;
  width: 60px;
  height: 60px;
`;

export const MiniCartInfos = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 0.5rem;
`;

export const StyledMiniCartItem = styled.li`
  display: flex;
  align-items: center;
  border-top: 1px solid #e8e8e8;
  margin-bottom: 0.5rem;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const MiniCartItemName = styled.span`
  display: block;
  padding-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const MiniCartItemPrice = styled.span`
  color: ${color("black")};
  margin-right: 8px;
`;

export const MiniCartItemQty = styled.span`
  color: #828282;
`;
