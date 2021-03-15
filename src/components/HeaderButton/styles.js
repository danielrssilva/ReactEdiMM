import styled from "styled-components";
import { Droplet } from "@styled-icons/boxicons-solid/Droplet";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: white;

  min-width: ${({ color }) => (color ? "30px" : "56px")};
  height: 34px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 0.2rem;

  font-weight: bold;
  box-sizing: border-box;
  &:hover {
    background: ${({ color }) => (color ? "" : "#a1a1a1")};
    cursor: ${({ color }) => (color ? "unset" : "pointer")};
  }
  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #262626;
    margin-right: -0.3rem;
    display: ${({ hasDropDown }) => (hasDropDown ? "" : "none")};
    transform: ${({ dropDownActive }) =>
      dropDownActive ? "rotate(180deg)" : ""};
    transition: transform 0.2s;
  }
  &.active {
    border-color: #028128;
    background: #b4dabf;
    &:hover {
      background: #dbf0e1;
    }
  }
  > span {
    padding: 0.3rem 0;
    margin-right: 0.2rem;
  }

  > div {
    width: 12px;
    height: 12px;
    border-radius: 0 15px 15px 15px;
    border: 1px solid black;
    transform: rotate(45deg);
    background: ${({ color }) => (color ? color : "black")};
  }

  background: ${({ color }) => (color ? color : "")};
  height: ${({ height }) => (height ? `${height}px` : "")};
  box-shadow: 0 0 1px 1px ${({ color }) => (color ? "white" : "")};
  border: ${({ color }) => (color ? "none" : "")};
`;

export const ColorButtonSvg = Droplet;
