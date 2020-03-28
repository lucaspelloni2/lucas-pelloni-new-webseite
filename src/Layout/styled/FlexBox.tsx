import styled from "styled-components";

export const FlexBox = styled.div<{ flex: number }>`
  flex: ${props => props.flex};
`;
