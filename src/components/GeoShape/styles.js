import styled from "styled-components";

export const Shape = styled.div`
  height: calc(100% - 4px);
  /* min-height: 20px; */
  padding-bottom: ${({ both }) => (both ? "0" : "95%")};
  /* padding-right: ${({ both }) => (both ? "0" : "100%")}; */
  border: ${({ size }) => `${size}px` || "2px"} solid ${({ color }) => color};
  background: ${({ fill, color }) => (fill ? color : "")};
  border-radius: ${({ circle }) => circle && "100%"};
`;

export const Container = styled.div`
  width: 20px;
  ${({ both }) => both && "height: 20px;"}
  min-width: 20px;
  min-height: 20px;
  position: absolute;
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x + 2}px`};
  resize: both;
  resize: ${({ both }) => (both ? "both" : "horizontal")};
  overflow: hidden;
  z-index: 90;
`;
