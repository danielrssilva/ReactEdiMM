import styled from "styled-components";
import { DotsVerticalRounded } from "@styled-icons/boxicons-regular/DotsVerticalRounded";
import { Trash } from "@styled-icons/heroicons-outline/Trash";
import { ArrowsMove } from "@styled-icons/bootstrap/ArrowsMove";

export const StyledAudio = styled.div`
  width: 400px;
  position: absolute;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  z-index: 99;
  .rhap_container {
    box-shadow: 0 0 3px 0 ${({ color }) => color}66;
  }
  .rhap_header {
    font-weight: 500;
  }
  .rhap_progress-filled,
  .rhap_progress-indicator {
    background-color: ${({ color }) => color};
  }
  .rhap_play-pause-button {
    border-radius: 100px;
    box-shadow: 0 0 3px 0 ${({ color }) => color};
  }
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

export const MenuIcon = DotsVerticalRounded;
export const Delete = Trash;
export const MoveIcon = ArrowsMove;
