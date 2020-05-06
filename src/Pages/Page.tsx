import React, { forwardRef, ReactNode, Ref } from "react";
import styled from "styled-components";
import { PAGE_HEIGHT, PAGE_TRANSITION } from "../Layout/Theme";

type Props = {
  component: ReactNode;
  name: string;
  translation: number;
};

const Child = styled.div<{ translation: number }>`
  position: absolute;
  transform: ${props => `translateY(${props.translation}%)`};
  height: ${PAGE_HEIGHT}%;
  left: 0;
  transition: ${PAGE_TRANSITION};
  width: 100%;
`;

export const Page = forwardRef(
  ({ component, name, translation }: Props, ref: Ref<HTMLDivElement>) => {
    return (
      <Child ref={ref} translation={translation}>
        {component}
      </Child>
    );
  }
);
