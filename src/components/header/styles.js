import styled from "styled-components";
import { Droplet } from "@styled-icons/boxicons-solid/Droplet";

export const Header = styled.div`
    top: 0;
    position: fixed;
    height: 4rem;
    z-index: 100;
    width: 100vw;
    color: white;
    background: #262626;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    transition: 0.3s all;
    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    box-shadow: 0px 0px 10px 0px
        ${(props) => (props.color ? props.color : "#262626")};

    animation: 5s breath-animation 3s ease-in-out alternate infinite;

    @keyframes breath-animation {
        0% {
            box-shadow: 0px 0px 10px 0px
                ${(props) => (props.color ? props.color : "#262626")};
        }
        100% {
            box-shadow: 0px 0px 5px 0px
                ${(props) => (props.color ? props.color : "#262626")};
        }
    }
`;

export const FixedButtons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const LineWeightSpan = styled.div`
    background: ${(props) => (props.color ? props.color : "white ")};
    width: 28px;
    height: ${(props) => (props.height ? props.height : "10px")};
    border-radius: 3px;
    transition: 0.3s all;
`;

export const HeaderButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background: white;

    min-width: ${(props) => (props.color ? "30px" : "56px")};
    height: 34px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin: 0.2rem;

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
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #262626;
        margin-right: -0.3rem;
        display: ${(props) => (props.hasDropDown ? "" : "none")};
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
        padding: 0.3rem 0;
        margin-right: 0.2rem;
    }

    > div {
        width: 12px;
        height: 12px;
        border-radius: 0 15px 15px 15px;
        border: 1px solid black;
        transform: rotate(45deg);
        background: ${(props) => (props.color ? props.color : "black")};
    }

    background: ${(props) => (props.color ? props.color : "")};
    height: ${(props) => (props.height ? `${props.height}px` : "")};
    box-shadow: 0 0 1px 1px ${(props) => (props.color ? "white" : "")};
    border: ${(props) => (props.color ? "none" : "")};`;

export const ColorButtonSvg = Droplet;
