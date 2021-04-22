import styled, { keyframes } from 'styled-components'

export const fadeOut = keyframes`
    0% { opacity : 1};
    90% { opacity: 1};
    100% {
        opacity: 0;
        display: none;
        z-index: -1;
    }
`

export const DesktopWp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    animation: ${fadeOut} .5s ease-in-out;
    transition: all .5s ease-in-out;
    width: 100vw;
    height: 100vh;
`