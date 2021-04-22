import styled, { keyframes } from 'styled-components'

const load = keyframes`
    0% { width: 0; }
    35% { width: 35%}
    80% { width: 58%}
    100% { width: 100%;}
`

const fadeOut = keyframes`
    0% { opacity : 1};
    95% { opacity: 1};
    100% {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
`

export const SpinnerContainer = styled.div`
    animation: ${fadeOut} 13s normal forwards;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
`
export const Logo = styled.img`
    animation: ${fadeOut} 12.8s normal forwards;
    width: 70px;
    margin-bottom: 3rem;
`

export const LoadLine = styled.div`
    animation: ${fadeOut} 12.8s normal forwards;
    width: 200px;
    height: 4px;
    border-radius: 5px;
    background: #999;
    box-sizing: border-box;
`

export const FillLoadLine = styled.div`
    animation: ${load} 10s normal forwards;
    width: 0;
    height: 4px;
    border-radius: 5px;
    background: #fff;
`