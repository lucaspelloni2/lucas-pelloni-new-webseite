import styled from "styled-components";
import { SPACING } from "../Theme";

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: ${SPACING * 2}px;
  overflow-x: hidden;
`;
