import styled from 'styled-components'


export const LeftSide = styled.div`
    background-color: rgb(32, 31, 38);
    color: white;
    grid-row: 1 / -1;
    border-radius: 10px 0 0 10px;
    padding: 5px;
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

    svg {
        visibility: hidden;
    }
`

export const BtnWrapper = styled.div`
    display: flex;
    width: 100%;
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
    color: #999;
    font-size: 12px;
    padding: 1rem 0.3rem;
    cursor: default;
`

export const AppList = styled.span`
    padding: 10px 0;
    display: flex;
    align-items: center;
    color: #fff;

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