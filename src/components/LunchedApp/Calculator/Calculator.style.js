import styled from 'styled-components';

export const CalculatorContainer = styled.div`
    text-align: center;
    border-radius: 5px;
    grid-row: 1 / -1;
    grid-column: 1 / -1;
    overflow: hidden;
`

export const Keypad = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(60px, auto);
    gap: 1px;
    outline: none;
    height: 82%;
    margin: .5px;
`

export const Result = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 15%;
    font-size: 3rem;
    color: #fff;
    font-weight: 200;
    padding: .5rem 1rem;
    border: none;
    background-color: inherit;
    color: white;
    letter-spacing: 1px;
    outline: none;
    cursor: default;
`

export const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-size: 1.6rem;
    font-weight: 300;
    background-color:rgba(115,115,115,.6);
    border: 0;
    color: white;
    cursor: default;


    ${({ functionality }) => functionality && `
        background-color: #f1a03b;
    `}

    ${({ topKey }) => topKey && `
        grid-row: 1;
        background-color: rgba(89,89,89,.7);
    `}

    ${({ equal }) => equal && `
        grid-column: 4 / -1;
    `}

    ${({ zero }) => zero && `
        grid-column: 1 / 3;
    `}
`