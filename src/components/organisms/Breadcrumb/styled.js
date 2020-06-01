import styled from "styled-components";
import { spacing } from "helpers/themeHelpers";

export const StyledBreadcrumbList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${spacing(["md"])};
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: bold;

  & > span {
    margin: 0 0.25rem;
  }
`;
