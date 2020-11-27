import React from "react";

import { Sidebutton } from "./styles";

const SideButton = (props) => {
    return (
        <Sidebutton
            className={props.isSelected ? "active" : ""}
            color={props.color}
            onClick={() => props.setSelectedFunction(props.value)}
            value={props.value}
        >
            {props.children}
        </Sidebutton>
    );
};

export default SideButton;
