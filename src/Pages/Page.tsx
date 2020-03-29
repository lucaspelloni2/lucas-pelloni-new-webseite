import React, { forwardRef, Ref } from "react";
import styled from "styled-components";
import { ReactNode } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

type Props = {
  component: ReactNode;
  name: string;
};

const Child = styled.div``;

const ScrollableElement = Scroll.Element;

export const Page = forwardRef(
  ({ component, name }: Props, ref: Ref<HTMLDivElement>) => {
    return (
      <ScrollableElement name={name}>
        <Child ref={ref}>{component}</Child>
      </ScrollableElement>
    );
  }
);
