import { useStateValue } from "../../StateProvider";
import FinderApp from "../LunchedApp/FinderApp/FinderApp.component";
import { DesktopContainer } from "./Desktop.style";

const Desktop = () => {

    const [{finderApp}, dispatch] = useStateValue()

    return(
        <DesktopContainer>
            { finderApp && <FinderApp /> }

        </DesktopContainer>
    )
}

export default Desktop;