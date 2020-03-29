import React, { forwardRef, Ref } from "react";
import styled from "styled-components";
import { ReactNode } from "react";

type Props = {
  component: ReactNode;
};

const Child = styled.div``;

export const Page = forwardRef(
  ({ component }: Props, ref: Ref<HTMLDivElement>) => {
    return <Child ref={ref}>{component}</Child>;
  }
);
