import React, { forwardRef, ReactNode, Ref } from "react";
import styled from "styled-components";
import { PAGE_HEIGHT, PAGE_TRANSITION } from "../Layout/Theme";

type Props = {
  component: ReactNode;
  name: string;
  offset: number;
};

const Child = styled.div<{ offset: number }>`
  position: absolute;
  height: ${PAGE_HEIGHT}vh;
  left: 0;
  will-change: transform;
  transition: ${PAGE_TRANSITION};
  width: 100%;
  transform: translateY(${props => props.offset}%);
`;

export const Page = forwardRef(
  ({ component, name, offset }: Props, ref: Ref<HTMLDivElement>) => {
    return (
      <Child ref={ref} offset={offset}>
        {component}
      </Child>
    );
  }
);
