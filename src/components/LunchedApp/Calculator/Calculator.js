import { useState } from "react";
import { Btn, CalculatorContainer, Keypad, Result } from "./Calculator.style";

const Calculator = () => {

    const [result, setResult] = useState('0');

    const handleChange = e => {
        result === '0' ? setResult(parseInt(result + result.concat(e.target.name)).toString()) :
            setResult(result.concat(e.target.name))
    }

    const clear = () => {
        setResult('0')
    }

    const backspace = () => {
        result !== '0' && setResult(result.slice(0, -1));
        result.length <= 1 && setResult('0');
        console.log(result.length);
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch {
            setResult('Error')
        }
    }

    return (
        <>
            <CalculatorContainer>
                    <Result >{result}</Result>
                <Keypad>
                    <Btn topKey onClick={clear}>{ result.length == 1 ? 'AC' : 'C'}</Btn>
                    <Btn topKey onClick={backspace}>C</Btn>
                    <Btn topKey name='%' onClick={handleChange}>%</Btn>
                    <Btn functionality name='/' onClick={handleChange}>&divide;</Btn>
                    <Btn name='9' onClick={handleChange}>9</Btn>
                    <Btn name='8' onClick={handleChange}>8</Btn>
                    <Btn name='7' onClick={handleChange}>7</Btn>
                    <Btn functionality name='*' onClick={handleChange}>x</Btn>
                    <Btn name='6' onClick={handleChange}>6</Btn>
                    <Btn name='5' onClick={handleChange}>5</Btn>
                    <Btn name='4' onClick={handleChange}>4</Btn>
                    <Btn functionality name='+' onClick={handleChange}>+</Btn>
                    <Btn name='3' onClick={handleChange}>3</Btn>
                    <Btn name='2' onClick={handleChange}>2</Btn>
                    <Btn name='1' onClick={handleChange}>1</Btn>
                    <Btn functionality name='-' onClick={handleChange}>-</Btn>
                    <Btn zero name='0' onClick={handleChange}>0</Btn>
                    <Btn name='.' onClick={handleChange}>,</Btn>
                    <Btn functionality equal name='=' onClick={calculate}>=</Btn>
                </Keypad>
            </CalculatorContainer>
        </>
    );


}

export default Calculator