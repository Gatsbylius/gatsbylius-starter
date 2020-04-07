import styled from "styled-components";
import { spacing, color } from "../../helpers/themeHelpers";

export const BreadcrumbList = styled.div`
  margin-bottom: ${spacing(["md"])};
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.2rem;
  font-weight: bold;

  a {
    color: ${color("greyDark")};
    text-decoration: underline;

    &:hover {
      color: ${color("primary")};
    }
  }
`;
