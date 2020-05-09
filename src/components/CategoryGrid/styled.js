import styled from "styled-components";
import { Link } from "gatsby";

export const selectedCategory = `
  color: black;
`;

export const CategoryTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5.5vw;
  text-shadow: ${({ theme }) => theme.textShadows.medium};
`;

export const CategoryImageContainer = styled.div`
  margin-top: 1.5em;
  position: relative;
  text-align: center;
  color: white;
`;

export const ChildCategoryLinks = styled(Link)`
  color: grey;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #00a0c6;
    text-decoration: none;
    cursor: pointer;
  }
`;
