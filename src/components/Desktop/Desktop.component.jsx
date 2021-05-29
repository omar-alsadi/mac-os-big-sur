import { useStateValue } from "../../StateProvider";
import CalculatorApp from "../LunchedApp/Calculator/Calculator.component";
import FinderApp from "../LunchedApp/FinderApp/FinderApp.component";
import NotesApp from "../LunchedApp/NotesApp/NotesApp.component";
import SafariApp from "../LunchedApp/SafariApp/SafariApp.component";
import { DesktopContainer } from "./Desktop.style";

const Desktop = () => {

    const [{ calculator, finder, safari, notes }, dispatch] = useStateValue();

    return (
        <DesktopContainer>
            { finder && <FinderApp />}
            { safari && <SafariApp />}
            { notes && <NotesApp />}
            { calculator && <CalculatorApp />}

        </DesktopContainer>
    )
}

export default Desktop;