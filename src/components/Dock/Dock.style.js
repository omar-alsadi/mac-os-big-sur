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
    border-radius: 13px;
    background: rgba(255,255,255,.3);
    color: #000;
    border: 1px solid rgba(0,0,0, .3);

    ${({ isDark }) => isDark && `
    background: rgba(0,0,0,.2);
    color: #fff;
    border: 1px solid rgba(255,255,255, .3)
  `}
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
    background: rgba(255,255,255,.3);
    color: #000;
    position: absolute;
    top: -50%;
    left: 10%;
    backdrop-filter: blur(50px);
    width: 60px;
    height: 20px;
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    z-index: 10;
    border: 1px solid rgba(255,255,255, .3);

    ${({ isDark }) => isDark && `
    background: rgba(43, 42, 42, .7);
    color: #fff;
  `}
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