import styled from 'styled-components'

export const ContextMenuContainer = styled.div`
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
    background-color: rgba(27,27,28,.4);
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    border-radius: .5rem;
    box-shadow: rgba(0,0,0,.3) 0 0 11px 0;
`

export const ContextMenuList = styled.button`
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    display: flex;
    color: white;
    background-color: transparent;
    border: none;
    /* justify-content: flex-start; */
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
        background-color: #0C61FE;
    }
`

export const BreakLine = styled.div`
    width: 100%;
    height: .3px;
    background-color: rgba(	194, 194, 255, .2);
    margin: 2px 0;
`