import styled from 'styled-components'

export const IsDesktopContainer = styled.div`
    width: 150%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;

    & p {
        width: 80vw;
        line-height: 1.5;
        text-align: center;
    }
`