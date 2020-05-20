import styled from "styled-components";

const StyledPrice = styled.strong`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
`;

export { StyledPrice };
