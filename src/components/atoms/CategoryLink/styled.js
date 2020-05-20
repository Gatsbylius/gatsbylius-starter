import styled from "styled-components";
import { Link } from "gatsby";

export const StyledCategoryLinks = styled(Link)`
  color: ${({ selected }) => (selected ? "black" : "grey")};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #00a0c6;
    text-decoration: none;
    cursor: pointer;
  }
`;
