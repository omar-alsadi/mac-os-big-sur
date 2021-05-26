import OSApp from "../OSApp";
import Calculator from "./Calculator";

const CalculatorApp = () => {

    return (
        <OSApp width='300' height='420' AppName='CALCULATOR'
        containerStyle='calculator'
        style={{ backgroundColor: '#101016'}}
        children={<Calculator />} />
    )
}

export default CalculatorApp;