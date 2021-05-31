import { useStateValue } from "../../StateProvider";
import CalculatorApp from "../LunchedApp/Calculator/Calculator.component";
import FinderApp from "../LunchedApp/FinderApp/FinderApp.component";
import NotesApp from "../LunchedApp/NotesApp/NotesApp.component";
import SafariApp from "../LunchedApp/SafariApp/SafariApp.component";
import TempApp from "../LunchedApp/TempWindow/TempWindow.component";
import { DesktopContainer } from "./Desktop.style";

const Desktop = () => {

    const [{ mail, contacts, calculator, finder, safari, maps, notes }, dispatch] = useStateValue();

    return (
        <DesktopContainer>
            { finder && <FinderApp />}
            { safari && <TempApp tempAppName='Safari' /> }
            { mail && <TempApp tempAppName='Mail' />}
            { contacts && <TempApp tempAppName='Contacts' />}
            { notes && <NotesApp />}
            { maps && <TempApp tempAppName='Maps' />}
            { calculator && <CalculatorApp />}
        </DesktopContainer>
    )
}

export default Desktop;