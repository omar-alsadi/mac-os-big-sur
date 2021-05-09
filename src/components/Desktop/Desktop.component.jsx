import { useStateValue } from "../../StateProvider";
import Calculator from "../LunchedApp/Calculator/Calculator.component";
import FinderApp from "../LunchedApp/FinderApp/FinderApp.component";
import SafariApp from "../LunchedApp/SafariApp/SafariApp.component";
import { DesktopContainer } from "./Desktop.style";

const Desktop = () => {

    const [{ calculator, finder, safari }, dispatch] = useStateValue();

    return (
        <DesktopContainer>
            { finder && <FinderApp />}
            { safari && <SafariApp />}
            { calculator && <Calculator />}

        </DesktopContainer>
    )
}

export default Desktop;