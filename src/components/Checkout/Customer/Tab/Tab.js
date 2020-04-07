import styled from "styled-components";
import { Tab, TabList } from "react-web-tabs";
import { spacing, color } from "helpers/themeHelpers";

export const TabListWrapper = styled(TabList)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabCustom = styled(Tab)`
  border: none;
  background-color: transparent;
  padding: ${spacing(["none", "sm", "md", "sm"])};
  color: ${color("greyMiddle1")};
  border-bottom: solid 1px ${color("greyMiddle1")};

  &.active {
    color: ${color("greyDark")};
    font-weight: 600;
    border-bottom: solid 2px ${color("greyDark")};
  }
`;
