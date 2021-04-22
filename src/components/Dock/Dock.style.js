import styled from 'styled-components';

export const DockContainer = styled.div`
    background: rgba(0,0,0,.2);
    color: #fff;
    font-size: 12px;
    backdrop-filter: blur(50px);
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin: 10px auto;
    border: 1px solid rgba(255,255,255, .3);
    border-radius: 13px;
`

export const DockLogo = styled.img`
    width: 35px;
    padding: 0 10px;
    transition: all .4s ease-in-out;

    &:hover {
        width: 50px;
    }
`

export const AppWrapper = styled.div`
    position: relative;

    &:last-child {
        border-left: 1px solid rgba(255,255,255, .3);
    }

    &:hover {
        span {
            display: flex
        }
    }
`

export const AppName = styled.span`
    position: absolute;
    top: -50%;
    left: 10%;
    background: rgba(43, 42, 42, .7);
    backdrop-filter: blur(50px);
    width: 60px;
    height: 20px;
    display: none;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255,255,255, .3);
    border-radius: 5px;
    z-index: 10;
`

export const AppLunched = styled.span`
    position: absolute;
    bottom: -5px;
    left: 48%;
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 50%;
`