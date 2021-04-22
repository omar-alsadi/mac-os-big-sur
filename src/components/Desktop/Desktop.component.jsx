import { useStateValue } from "../../StateProvider";
import LunchedApp from "../LunchedApp/LunchedApp.component";
import { DesktopContainer } from "./Desktop.style";

const Desktop = () => {

    const [{finderApp}, dispatch] = useStateValue()

    return(
        <DesktopContainer>
            { finderApp && <LunchedApp /> }

        </DesktopContainer>
    )
}

export default Desktop;