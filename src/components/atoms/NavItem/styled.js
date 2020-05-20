import styled from "styled-components";
import { Link } from "gatsby";
import { mediaQuery, color, spacing } from "helpers/themeHelpers";

export const StyledNavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  font-size: 1.4rem;
  text-transform: uppercase;
  transition: background-color 0.3s;
  &:hover,
  &.active {
    background-color: ${color("greyLight1")};
  }

  @media (min-width: ${mediaQuery("md")}) {
    margin-right: ${spacing(["xs"])};
    justify-content: flex-start;
    font-size: 1rem;
    &:last-child {
      margin-right: 0;
      background-color: inherit;
    }
  }
`;

export const StyledNavLink = styled(Link)`
  padding: 1.2rem;
  color: rgb(36, 36, 40);
  transition: color 0.3s;
  &:hover,
  &.active {
    color: ${color("primary")};
  }

  @media (min-width: ${mediaQuery("md")}) {
    padding: 0;
  }
`;
