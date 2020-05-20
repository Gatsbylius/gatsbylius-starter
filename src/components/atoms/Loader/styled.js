import styled from "styled-components";

const StyledLoadingIcon = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  border-top: 2px solid ${({ color }) => color};
  border-right: 2px solid transparent;
  animation: spinner 0.6s linear infinite;
`;

export { StyledLoadingIcon };
