import { SiAirplayaudio } from "react-icons/si";
import { BiCloud } from 'react-icons/bi'
import { GrAppleAppStore } from 'react-icons/gr';
import {CgDesktop} from 'react-icons/cg';
import {WiTime9} from 'react-icons/wi';
import {IoDocumentOutline} from 'react-icons/io5'
import { AppList, AppsLeft } from "../LunchedApp.sytle";


const FinderSlider = () => {

    return (
        <AppsLeft>
            Favourit
            <AppList>
                <SiAirplayaudio />AirDrop
            </AppList>
            <AppList>
                <WiTime9 />Recents
            </AppList>
            <AppList>
                <GrAppleAppStore/>Application
            </AppList>
            <AppList>
            <CgDesktop />Desktop
            </AppList>
            <AppList>
                <IoDocumentOutline />Documents
            </AppList>
            <br />
            iCloud
            <AppList>
                <BiCloud />iCloud Drive
            </AppList>
            <br />
            Tags
        </AppsLeft>
    )
}

export default FinderSlider;