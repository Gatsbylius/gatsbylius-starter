import styled from "styled-components";
import { spacing } from "helpers/themeHelpers";

export const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: ${spacing(["xs"])};
  }
`;
