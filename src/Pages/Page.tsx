import React from "react";
import styled from "styled-components";
import { ReactNode } from "react";

type Props = {
  component: ReactNode;
};

const Child = styled.section`
  scroll-snap-align: start;
`;

export const Page = ({ component }: Props) => {
  return <Child>{component}</Child>;
};
