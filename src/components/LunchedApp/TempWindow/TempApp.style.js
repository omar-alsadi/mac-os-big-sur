import styled from "styled-components";

export const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    justify-content: center;
    align-items: center;
`

export const WelcomeTitle = styled.div`
    font-family: system-ui;
    text-align: center;
    margin: .5rem 0;
    padding: 1.5rem 3rem;

    & h2 {
        color: black;
        font-weight: 300;
        font-size: 24px ;

        ${({ isDark }) => isDark && `
            color: white;
        `}
    }

    & img {
        width: 100px;
        height: 100px;
    };

`
