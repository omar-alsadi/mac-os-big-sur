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
        font-weight: 500;
        font-size: 28px ;

        ${({ isDark }) => isDark && `
            color: white;
        `}
    }

    span {
        color: #999;
        font-weight: 500;
    }
`

export const FeaturesWrapper = styled.div`
    display: flex;
    width: 380px;
    align-items: center;

    & img {
        width: 70px;
        height: 70px;
    };
`;


export const FeaturesDesc = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;


    & h4 {
        color: black;
        font-weight: 500;
        margin: 0.3rem 0;

        ${({ isDark }) => isDark && `
            color: white;
        `}
    }

    & span {
        color: #999;
        font-size: 12px;
        font-weight: 400;
    }
`

export const Btn = styled.button`
    background-color: #E6C04D;
    color: white;
    border: none;
    border-radius: 5px;
    padding: .5rem 1rem;
    margin-top: 1rem ;

    &:hover {
        background-color: #F8CC46;
    }
`