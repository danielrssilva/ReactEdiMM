import React from "react";
import { WrittableContent } from "./styles";

const Text = ({
    x,
    y,
    font,
    size,
    color,
    isTextArea,
    bold,
    underlined,
    italic,
}) => {
    return (
        <WrittableContent
            x={x}
            y={y}
            font={font}
            size={size}
            color={color}
            isTextArea={isTextArea}
            bold={bold}
            underlined={underlined}
            italic={italic}
            contentEditable
        >
            Clique para editar.
        </WrittableContent>
    );
};

export default Text;
