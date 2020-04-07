import styled from "styled-components";
import { Row } from "styled-bootstrap-grid";
import { color, spacing } from "../../../helpers/themeHelpers";

const styleButtonShared = `
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  padding: 1rem 2rem;
  border: none;
`;

export const RadioText = styled.p`
  color: black;
  font-weight: bold;
  margin: 0;
`;

export const Title = styled.h1`
  padding: ${spacing(["md", "none"])};
  text-transform: capitalize;
`;

export const InputsRow = styled(Row)`
  padding: ${spacing(["xs", "none"])};
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

export const ValidButton = styled.button`
  ${styleButtonShared}
  color: ${color("white")};
  background-color: ${color("deepBlue1")};
  border-radius: 3px;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${color("deepBlue2")};
  }
`;

export const BackButton = styled.button`
  ${styleButtonShared}
  color: ${color("greyDark")};
  background-color: ${color("greyLight")};
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${color("greyAlto")};
  }

  span {
    margin-right: 0.75rem;
  }
`;
