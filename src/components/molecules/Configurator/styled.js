import styled from "styled-components";
import { color, spacing } from "helpers/themeHelpers";

export const OptionList = styled.ul`
  padding: ${spacing(["xs", "none", "sm", "none"])};
`;

export const OptionItem = styled.li`
  border: 1px solid ${color("greyMedium")};
  border-top: none;
  padding: ${spacing(["xxs", "xs", "xxs", "xs"])};
  display: flex;
  cursor: pointer;
  transition: background-color 0.25s;
  background-color: ${({ selected }) =>
    selected ? color("greyLight1") : "white"};

  &:first-child {
    border-top: 1px solid ${color("greyMedium")};
  }

  &:hover {
    background-color: ${({ selected }) =>
      selected ? color("greyLight1") : color("greyLight")};
  }
`;

export const OptionLeft = styled.div`
  margin-left: auto;
`;

export const OptionRadio = styled.input`
  margin-left: ${spacing(["sm"])};
`;
