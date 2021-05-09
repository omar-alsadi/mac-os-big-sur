import styled from 'styled-components'


export const LeftSide = styled.div`

    background-color: rgb(221, 221, 221);
    color: black;
    grid-row: 1 / -1;
    border-radius: 10px 0 0 10px;
    padding: 5px;

    ${({ isDark }) => isDark && `
        background-color: rgb(32, 31, 38);
        color: #000;
  `}
`

export const FinderBtn = styled.button`
    width: .8rem;
    height: .8rem;
    margin: 0 5px;
    border: none;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    outline: none;
    transition: all .2s ease-in-out;

    svg {
        visibility: hidden;
    }
`

export const BtnWrapper = styled.div`
    display: flex;
    width: fit-content;
    padding: .5rem;
    grid-row: 1 / 2;

    &:hover {
        svg {
            visibility: visible;
        }
    }
`

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 1.5rem;
`

export const TopNav = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
`

export const AppsLeft = styled.div`
    display: flex;
    flex-direction: column;
    color: #333;
    font-size: 12px;
    font-weight: 600;
    padding: 1rem 0.3rem;
    cursor: default;

    & span {
        color: #000;
    }

    ${({ isDark }) => isDark && `
        color: #999;

        & span {
            color: #fff;
        }
       
  `}
`

export const AppList = styled.span`
    padding: 10px 0;
    display: flex;
    align-items: center;
    font-weight: 400;

    svg {
        margin-right: 5px;
        color: #2260AB;
        filter: brightness(1.5);
    }
`

export const FinderFilesWindow = styled.div`
    display: flex;
    padding: 1rem 0;
    cursor: default;
`

export const FileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    margin: 0 15px;

    img {
        width: 50px;
        height: 50px;
    }

    span {
        font-size: 12px;
        margin-top: 5px;
    }

`

export const RndWrapper = styled.div`
    background: rgb(255, 255, 255);
    color: #000;
    cursor: auto;
    border-radius: 10px;
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: 110px 1fr;
    height: 100%;
    box-shadow: 0 33px 81px rgb(0 0 0 / 31%);

    ${({ isDark }) => isDark && `
        background: rgb(27, 25, 30);
        color: white;
        border: solid 1px rgba(221, 221, 221, 0.5);
  `}
`

export const AppNavHead = styled.div`
        width: 98%;
        grid-column: 1 / -1;
`