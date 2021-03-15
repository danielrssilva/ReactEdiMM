import styled from "styled-components";

export const Sidebutton = styled.a`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 60px;
  list-style: none;
  background: ${(props) => props.color};
  cursor: pointer;
  transition: 0.3s all;
  box-shadow: 0px 0px 0px -1px white;
  align-content: center;
  svg {
    color: white;
    align-self: center;
    flex-grow: 2;
    flex-basis: auto;
    width: 35px;
  }
  &:hover {
    border-radius: 100%;
    box-shadow: 0px 0px 0px 5px #fff;
    z-index: 99;
  }
  &.active {
    border-radius: 100%;
    z-index: 100;
    box-shadow: 0px 0px 0px 16px white;
    background: #a1a1a1;
    transition: 0.3s all;
    animation: pulse 3s infinite;
    animation-delay: 1s;
    cursor: unset;
  }
  @keyframes pulse {
    0% {
      box-shadow: 0px 0px 0px 16px #fff;
      background: #a1a1a1;
    }
    50% {
      box-shadow: 0px 0px 0px 19px #fdfdfd;
      background: #aaa;
    }
    100% {
      box-shadow: 0px 0px 0px 16px #fff;
      background: #a1a1a1;
    }
  }
  @media (max-height: 760px) {
    width: 45px;
    height: 45px;
    > svg {
        width: 25px;
    }
    &.active {
      box-shadow: 0px 0px 0px 9px white;
      animation: smallPulse 3s infinite;
      animation-delay: 1s;
    }

    @keyframes smallPulse {
      0% {
        box-shadow: 0px 0px 0px 9px #fff;
        background: #a1a1a1;
      }
      50% {
        box-shadow: 0px 0px 0px 12px #fdfdfd;
        background: #aaa;
      }
      100% {
        box-shadow: 0px 0px 0px 9px #fff;
        background: #a1a1a1;
      }
    }
  }
`;
