import styled from 'styled-components'

export const MenuListContainer = styled.div`
    display: block;
    z-index: 99999999;
    min-width: 16rem;
    padding: .5rem;
    position: absolute;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    border: 1px solid rgba(255,255,255,.3);
    background-color: rgba(255,255,255,.8);
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    border-radius: .5rem;
    box-shadow: rgba(0,0,0,.3) 0 0 11px 0;
    top: 25px;

    ${({ isDark }) => isDark && `
        background-color: rgba(27,27,28,.8);
    `}
`

export const List = styled.button`
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    display: flex;
    color: black;
    background-color: transparent;
    border: none;
    justify-content: space-between;
    width: 100%;
    padding: .3rem .4rem;
    margin: .2rem 0;
    letter-spacing: .4px;
    font-weight: 400;
    font-size: .9rem;
    border-radius: .3rem;
    transition: none;

    &:hover {
        color: white;
        background-color: #0C61FE;
    }

    ${({ isDark }) => isDark && `
        color: white;

        &:hover {
            background-color: #147FFE;
        }
    `}

    ${({ disabled }) => disabled && `
        color: rgba(21,21,35, .5);

            &:hover {
                color: rgba(27,27,27, .5);
                background-color: transparent;
            } 
        `}

    ${({ disabled, isDark }) => disabled && isDark && `
        color: rgba(221,221,221, .2);

            &:hover {
                color: rgba(221,221,221, .2);
                background-color: transparent;
            } 
        `}

`

export const BreakLine = styled.div`
    width: 100%;
    height: .3px;
    background-color: rgba(	21, 21, 35, .1);
    margin: 2px 0;

    ${({ isDark }) => isDark && `
        background-color: rgba(221,221,221,.1)
    `}
`