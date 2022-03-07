import React, {forwardRef, ReactNode, Ref} from "react";
import styled from "styled-components";
import {PAGE_HEIGHT} from "../Layout/Theme";

type Props = {
  component: ReactNode;
  offset: number;
};

const Child = styled.div<{offset: number}>`
  height: ${PAGE_HEIGHT}vh;
  width: 100%;
`;

export const Page = forwardRef(
  ({component, offset}: Props, ref: Ref<HTMLDivElement>) => {
    return (
      <Child ref={ref} offset={offset}>
        {component}
      </Child>
    );
  }
);
