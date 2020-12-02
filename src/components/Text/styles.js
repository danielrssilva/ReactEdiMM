import styled from "styled-components";
import { DotsVerticalRounded } from "@styled-icons/boxicons-regular/DotsVerticalRounded";
import { Trash } from "@styled-icons/heroicons-outline/Trash";
import { ArrowsMove } from "@styled-icons/bootstrap/ArrowsMove";

export const WrittableContent = styled.div`
  padding: 0.5rem;
  min-width: 140px;
  min-height: 15px;
  position: absolute;
  z-index: 99;
  left: 30px;
  font-size: ${(props) => `${props.size}px`};
  font-family: ${(props) => `${props.font}`};
  color: ${(props) => `${props.color}`};
  resize: horizontal;
  ${(props) =>
    props.isTextArea &&
    `resize: both;
        overflow: auto;
        border: 2px solid ${props.color};
        background: ${props.color};
        color: white;
        border-radius: 5px;`}
  text-transform: ${({ isTextArea }) => !isTextArea && "uppercase"};
  background: ${({ color }) => color === "#ffffff" && "#000"};
  font-weight: ${({ bold }) => bold && "bold"};
  text-decoration: ${({ underlined }) => underlined && "underline"};
  font-style: ${({ italic }) => italic && "italic"};
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  z-index: 99;
  top: -50px;
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const HeaderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: white;

  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px;

  font-weight: bold;
  box-sizing: border-box;
  &:hover {
    background: ${(props) => (props.color ? "" : "#a1a1a1")};
    cursor: ${(props) => (props.color ? "unset" : "pointer")};
  }
  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #262626;
    margin-right: -0.3rem;
    display: ${(props) => (props.hasDropDown ? "" : "none")};
    transform: ${({ dropDownActive }) =>
      dropDownActive ? "rotate(180deg)" : ""};
    transition: transform 0.2s;
  }
  &.active {
    &::after {
      content: "";
      display: flex;
      border-top: none;
      align-self: flex-start;
      justify-self: flex-end;

      border-radius: 50px;
      border: 5px solid #028128;
      margin-right: -15px;
      margin-left: 5px;

      background: #028128;
    }
  }
  > span {
    padding: 0.1rem 0;
    margin-right: 0.2rem;
  }
  svg {
    color: ${({ color }) => color === "#ffffff" && "#000"};
    align-self: center;
    flex-grow: 2;
    flex-basis: auto;
    width: 35px;
  }
`;

export const Content = styled.div`
  display: flex;
  position: absolute;
  z-index: 99;
  top: ${({ y }) => `calc(${y - 60}px - 4rem)`};
  left: ${({ x }) => `${x - 2}px`};
`;

export const MenuIcon = DotsVerticalRounded;
export const Delete = Trash;
export const MoveIcon = ArrowsMove;
