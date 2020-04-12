import styled from "styled-components";
import { PAGE_HEIGHT, SPACING } from "../Theme";

export const PageContainer = styled.div`
  min-height: ${PAGE_HEIGHT}vh;
  display: flex;
  flex-direction: column;
  padding: ${SPACING * 2}px;
  overflow-x: hidden;
`;
