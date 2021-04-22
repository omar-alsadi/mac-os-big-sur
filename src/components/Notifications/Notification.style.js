import styled, { keyframes } from 'styled-components'
// import {fadeOut} from '../OS/Os.style'

export const fadeIn = keyframes`
    0% { opacity : 0};
    100% {
        opacity: 1;
    }
`

export const NotificationContainer = styled.div`
    display: flex;
    width: 230px;
    height: 50px;
    border: 1px solid rgba(255,255,255,.3);
    background: rgba(0,0,0,.2);
    backdrop-filter: blur(50px);
    border-radius: 10px;
    font-size: 12px;
    color: #fff;
    align-items: center;
    padding: 5px 20px;
    position: absolute;
    right: 1rem;
    top: 2rem;
    animation: ${fadeIn} .5s ease-in-out;
    transition: all .5s ease-in-out;

    & div, span {
        cursor: default;
    }

    & span {
        position: absolute;
        top: 5px;
        left: 8px;
        display: none;
        opacity: 0;
        transition: all 2s ease-in-out;
    }

    &:hover {
        background: rgba(0,0,0,.3);

        span {
            display: block;
            opacity: 1;
        }
    }
`

export const AppLogo = styled.img`
    width: 30px;
    margin-right: 10px;
`