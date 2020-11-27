import styled from "styled-components";
import { Pencil } from "@styled-icons/remix-fill/Pencil";
import { Undo } from "@styled-icons/material-rounded/Undo";
import { Redo } from "@styled-icons/material-rounded/Redo";
import { Eraser } from "@styled-icons/boxicons-solid/Eraser";
import { Move } from "@styled-icons/evaicons-solid/Move";
import { Title } from "@styled-icons/material-rounded/Title";
import { Text } from "@styled-icons/entypo/Text";
import { Shapes } from "@styled-icons/boxicons-solid/Shapes";
import { ImageAdd } from "@styled-icons/boxicons-regular/ImageAdd";
import { VideoPlus } from "@styled-icons/boxicons-regular/VideoPlus";
import { Audiotrack } from "@styled-icons/material-rounded/Audiotrack";
import { FileEarmarkArrowUpFill } from "@styled-icons/bootstrap/FileEarmarkArrowUpFill";

export const SidebarContainer = styled.ul`
    bottom: 20%;
    padding: 0;
    z-index: 1000;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-self: center;
    flex-wrap: wrap;
    align-content: flex-start;
`;

export const UndoRedoDiv = styled.div`
    margin-top: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const UndoRedoButton = styled.button`
    background: #262626;
    height: 28px;
    width: 28px;
    border: none;
    padding: 2px;
    transition: 0.3s all;
    z-index: 2100;
    border: 0 solid #262626;
    svg {
        width: 20px;
        color: white;
    }
    :hover {
        cursor: pointer;
        border: 2px solid white;
        transition: 0.3s all;
    }
`;

export const RedoIcon = Redo;
export const UndoIcon = Undo;

export const PencilIcon = Pencil;
export const EraserIcon = Eraser;
export const MoveIcon = Move;
export const TextIcon = Title;
export const TextArea = Text;
export const ShapesIcon = Shapes;
export const AddImageIcon = ImageAdd;
export const AddAudio = Audiotrack;
export const AddVideoIcon = VideoPlus;
export const AddFile = FileEarmarkArrowUpFill;
