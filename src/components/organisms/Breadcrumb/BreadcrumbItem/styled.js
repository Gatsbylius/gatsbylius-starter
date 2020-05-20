import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "helpers/themeHelpers";

export const StyledLink = styled(Link)`
  color: ${color("greyDark")};
  text-decoration: underline;

  &:hover {
    color: ${color("primary")};
  }
`;
