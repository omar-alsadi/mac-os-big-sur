import styled from 'styled-components'

export const Nav = styled.div`
    font-size: 12px;
    backdrop-filter: blur(50px);
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 100;
    background: rgba(255,255,255,.3);
    color: #000;

    ${({ isDark }) => isDark && `
    background: rgba(0,0,0,.2);
    color: #fff;
    `}
`

export const NavLogo = styled.img`
    width: 15px;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: default;

    h3 {
        padding-right: 10px;
    }
`
export const MenuList = styled.h4`
    padding: 0 10px;
`

export const MenuIcons = styled.img`
    padding: 0 10px;
    width: 15px;
`

export const EachSide = styled.div`
    display: flex;
    align-items: center;
`
export const MenuStr = styled.strong`
    cursor: default;
`