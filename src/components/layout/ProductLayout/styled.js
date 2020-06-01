import styled from "styled-components";
import { color, spacing } from "helpers/themeHelpers";

export const ProductPageContainer = styled.div`
  padding: 0 1rem;
  background-color: ${color("white")};
  border-right: 1px solid ${color("greyLight1")};
  border-left: 1px solid ${color("greyLight1")};
  max-width: 1140px;
  margin: auto;
`;

export const ProductPageContent = styled.div`
  padding: ${spacing(["lg", "xs"])};
`;
