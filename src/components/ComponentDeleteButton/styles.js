import styled from "styled-components";
import { Trash } from "@styled-icons/heroicons-outline/Trash";

export const Container = styled.div`
  position: absolute;
  left: ${({ x }) => `${x - 35}px`};
  top: ${({ y }) => `${y}px`};
  z-index: 1000;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: red;

  width: 30px;
  height: 30px;
  border: none;
  box-shadow: 0 0 3px 0 ${({ color }) => color}66;
  border-radius: 3px;
  padding: 5px;

  font-weight: bold;
  box-sizing: border-box;
  &:hover {
    background: #ab2222;
    cursor: pointer;
  }
  > span {
    padding: 0.1rem 0;
    margin-right: 0.2rem;
  }
  > svg {
    color: #fff;
    align-self: center;
    flex-grow: 2;
    flex-basis: auto;
    width: 35px;
  }
`;

export const Delete = Trash;
