import styled from "styled-components";
import { DotsVerticalRounded } from "@styled-icons/boxicons-regular/DotsVerticalRounded";
import { Trash } from "@styled-icons/heroicons-outline/Trash";

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  z-index: 99;
  top: -35px;
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: ${({ hasDropDown }) => (hasDropDown ? "" : "30px")};
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px;
  margin-right: 5px;

  font-weight: bold;
  box-sizing: border-box;
  &:hover {
    background: ${(props) => (props.color ? "" : "#a1a1a1")};
    cursor: ${(props) => (props.color ? "unset" : "pointer")};
  }
  &.active {
    border-color: #028128;
    background: #02812855;
    &:hover {
      background: #02812877;
    }
  }
  > span {
    padding: 0.1rem 0;
    margin-right: 0.2rem;
  }

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #262626;
    /* margin-right: -0.3rem; */
    display: ${({ hasDropDown }) => (hasDropDown ? "" : "none")};
    transform: ${({ dropDownActive }) =>
      dropDownActive ? "rotate(180deg)" : ""};
    transition: transform 0.2s;
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
