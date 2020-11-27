import styled from "styled-components";

export const WrittableContent = styled.div`
    padding: 0.5rem;
    min-width: 100px;
    min-height: 15px;
    position: absolute;
    z-index: 99;
    top: ${(props) => `calc(${props.y}px - 4rem)`};
    left: ${(props) => `${props.x}px`};
    font-size: ${(props) => `${props.size}px`};
    font-family: ${(props) => `${props.font}`};
    color: ${(props) => `${props.color}`};
    ${(props) =>
        props.isTextArea &&
        `resize: both;
        overflow: auto;
        border: 2px solid ${props.color};
        background: ${props.color};
        color: white;
        border-radius: 5px;`}
    ${(props) => props.color === "#ffffff" && `background: #000`}
    ${(props) => props.bold && `font-weight: bold;`}
    ${(props) => props.underlined && `text-decoration: underline;`}
    ${(props) => props.italic && `font-style: italic;`}
`;
