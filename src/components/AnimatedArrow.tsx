import React from "react";
import styled from "styled-components";
import "./arrow.css";

const Wrapper = styled.div`
  position: relative;
`;

export const AnimatedArrow = () => {
  return (
    <div className="round">
      <div id="cta">
        <span className="arrow primera next " />
        <span className="arrow segunda next " />
      </div>
    </div>
  );
};
