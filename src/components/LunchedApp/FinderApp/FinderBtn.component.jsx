import { CloseIcon } from "../../Buttons/Close"
import { MaximizeIcon } from "../../Buttons/Maximize"
import { MinimizeIcon } from "../../Buttons/Minimize"
import { PlusIcon } from "../../Buttons/Plus"
import { BtnWrapper, FinderBtn } from "../LunchedApp.sytle"
import { closeApp, closeFinderApp } from "../../../actions";
import { useStateValue } from "../../../StateProvider";

const TrafficBtn = ({ onMaximizedClick, AppName }) => {

    const [{ appOpened }, dispatch] = useStateValue();

    const ActiveApp = AppName.charAt(0) + AppName.slice(1).toLowerCase();

    const MaximizeApp = () => {
        onMaximizedClick()
    }

    const CloseApp = () => {
        dispatch(closeApp(AppName.toUpperCase()));
    }

    return (

        <BtnWrapper className='app-window-drag-handle'>
            <FinderBtn
                style={appOpened === ActiveApp ? { backgroundColor: '#ff5f56' } : { backgroundColor: '#999' }} onClick={CloseApp}
            ><CloseIcon />
            </FinderBtn>
            <FinderBtn
                style={appOpened === ActiveApp ? { backgroundColor: '#ffbd2e' } : { backgroundColor: '#999' }}
            ><MinimizeIcon /></FinderBtn>
            <FinderBtn onClick={appOpened === 'Calculator' ? null : MaximizeApp}
                style={appOpened === ActiveApp ? { backgroundColor: '#27c93f' } : { backgroundColor: '#999' }}
            >{appOpened === 'Calculator' ? <PlusIcon /> : <MaximizeIcon />}</FinderBtn>
        </BtnWrapper>
    )
}

export default TrafficBtn