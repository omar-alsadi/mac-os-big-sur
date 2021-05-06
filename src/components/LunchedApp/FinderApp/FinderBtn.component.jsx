import { CloseIcon } from "../../Buttons/Close"
import { MaximizeIcon } from "../../Buttons/Maximize"
import { MinimizeIcon } from "../../Buttons/Minimize"
import { BtnWrapper, FinderBtn } from "../LunchedApp.sytle"
import { closeApp, closeFinderApp } from "../../../actions";
import { useStateValue } from "../../../StateProvider";

const TrafficBtn = ({onMaximizedClick , AppName}) => {

    const [{ appOpened }, dispatch ] = useStateValue();

    const MaximizeApp = () => {
        onMaximizedClick()
    }

    const CloseApp = () => {
        dispatch(closeApp(AppName));
    }

    return (

        <BtnWrapper className='app-window-drag-handle titleBar'>
            <FinderBtn
            style={{ backgroundColor : '#ff5f56'}} onClick={CloseApp}
            ><CloseIcon/>
            </FinderBtn>
            <FinderBtn
            style={{ backgroundColor : '#ffbd2e'}}
            ><MinimizeIcon/></FinderBtn>
            <FinderBtn onClick={MaximizeApp}
            style={{ backgroundColor : '#27c93f'}}
            ><MaximizeIcon/></FinderBtn>
        </BtnWrapper>
    ) 
}

export default TrafficBtn