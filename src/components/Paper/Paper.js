import styled from "styled-components";
import { Container } from "styled-bootstrap-grid";
import { color, spacing } from "../../helpers/themeHelpers";

const Paper = styled(Container)`
  background-color: ${color("white")};
  padding: ${spacing(["lg"])};
  height: 100%;
`;

export default Paper;
