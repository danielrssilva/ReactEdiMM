import React from "react";
import PropTypes from "prop-types";
import { FileDiv } from "./styles";

const FileInput = (props) => {
    const onChange = (selectedFile) => {
        if (selectedFile) {
            props.setFileName(selectedFile.name.split(".").shift());
            props.setFile(URL.createObjectURL(selectedFile));
            props.setSelectedFunction(selectedFile.type.substring(0, 5));
        }
    };
    return (
        <FileDiv
            color={props.color}
            title="Adicionar arquivo"
            className={props.isSelected ? "active" : ""}
        >
            {props.children}
            <input
                style={{ display: "none" }}
                type="file"
                onChange={(e) => {
                    onChange(e.target.files[0]);
                }}
                accept="audio/*,video/*,image/*"
            />
        </FileDiv>
    );
};

FileInput.propTypes = {
    setFile: PropTypes.func.isRequired,
};
export default FileInput;
