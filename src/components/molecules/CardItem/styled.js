import styled from "styled-components";
import { Link } from "gatsby";
import { spacing, color } from "helpers/themeHelpers";

export const CardItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-out;
  text-decoration: none;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.06);
    }
  }
`;

export const CardItemImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 300px;

  img {
    width: 100%;

    border-radius: 0.25rem;
  }
`;

export const CardItemInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing(["xs"])};
  font-size: 0.9rem;
  text-align: center;
  color: ${color("black")};
  transition: color 0.5s;
`;
