import styled from "styled-components";
import { StyledButton } from "components/atoms/Button/styled";

const IconButtonStyled = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 1.2rem;
  }
`;

export { IconButtonStyled };
