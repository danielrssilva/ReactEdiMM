import styled from "styled-components";

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
