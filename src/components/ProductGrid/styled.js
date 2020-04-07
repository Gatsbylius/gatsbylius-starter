import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { spacing, color } from "../../helpers/themeHelpers";

export const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-bottom: ${spacing(["xl"])};
`;

export const Link = styled(GatsbyLink)`
  max-width: 100%;
  transition: all 0.2s ease-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.06);
    }
  }
`;

export const GalleryImageWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 300px;
  max-width: 100%;
`;

export const Infos = styled.div`
  margin-top: ${spacing(["xs"])};
  font-size: 0.9rem;
  text-align: center;
  color: ${color("black")};
  transition: color 0.5s;
`;
