import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { AppList, AppsLeft, BtnWrapper, FileWrapper, FinderBtn, FinderFilesWindow, LeftSide, RightSide, TopNav } from "./LunchedApp.sytle";
import { CloseIcon } from '../Buttons/Close';
import {MinimizeIcon } from '../Buttons/Minimize';
import {MaximizeIcon } from '../Buttons/Maximize';
import {IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {AiOutlineSearch} from 'react-icons/ai';
import { BiCloud } from 'react-icons/bi'
import { GrAppleAppStore } from 'react-icons/gr';
import {CgDesktop} from 'react-icons/cg';
import {WiTime9} from 'react-icons/wi';
import {IoDocumentOutline} from 'react-icons/io5'
import {SiAirplayaudio} from 'react-icons/si'
import { useStateValue } from '../../StateProvider';
import {RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import File from '../../assest/file.png'
import Folder from '../../assest/folder.png'
import { toggleFinderApp } from "../../actions";

const LunchedApp = () => {

    const [{ appOpened }, dispatch ] = useStateValue();

    // Get current width and height
    const ClientWidth = window.innerWidth;
    const ClientHeight = window.innerHeight;

    const originalSizeRef = useRef({ width: 0 , height: 0});
    console.log('1: ', originalSizeRef);
    const updatedScreenSize = originalSizeRef.current = { width: ClientWidth, height: ClientHeight };
    console.log('2: ', updatedScreenSize);

    const originalPositionRef = useRef({
        x: 0,
        y: 0,
      });

    const windowRef = useRef(Rnd);
    console.log('windowRef: ', windowRef);

    const randint = (lower , upper) => {
        if (lower > upper) [lower, upper] = [upper, lower];
      
        return lower + Math.floor((upper - lower) * Math.random());
      }

    const randX = useMemo(() => randint(-600, 600), []);
    const randY = useMemo(() => randint(-100, 100), []);
  
    const style = {
        display: 'grid',
        gridTemplateRows: '50px 1fr',
        gridTemplateColumns: '110px 1fr',
        background:' rgb(27, 25, 30)',
        color: 'white',
        cursor: 'auto',
        border: "solid 1px rgba(221, 221, 221, 0.5)",
        borderRadius: '10px',
        background: "rgb(27, 25, 30)",
      };

      let X;
      let Y;

       X = ((3 / 2) * document.body.clientWidth + randX) / 2;
       Y = (100 + randY) / 2;

    return (
        <Rnd
            style={style}
            default={{
                height: 500,
                width: 500,
                x: X,
                y: Y,
            }} 
            dragHandleClassName="app-window-drag-handle"
            bounds="parent"
            minWidth="400"
            minHeight="400"
            >
                <LeftSide>
                    <BtnWrapper className='app-window-drag-handle titleBar'>
                        <FinderBtn
                        style={{ backgroundColor : '#ff5f56'}} onClick={() => dispatch(toggleFinderApp())}
                        ><CloseIcon/>
                        </FinderBtn>
                        <FinderBtn
                        style={{ backgroundColor : '#ffbd2e'}}
                        ><MinimizeIcon/></FinderBtn>
                        <FinderBtn
                        style={{ backgroundColor : '#27c93f'}}
                        ><MaximizeIcon/></FinderBtn>
                    </BtnWrapper>
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
                </LeftSide>
                <RightSide className='app-window-drag-handle titleBar'>
                    <TopNav>
                        <IoIosArrowBack />
                        <IoIosArrowForward />
                            <span>Finder</span>
                    </TopNav>
                    <div>
                        <AiOutlineSearch />
                    </div>
                </RightSide>
                    <FinderFilesWindow>
                        <FileWrapper>
                            <img src={Folder} alt='folder' />
                            <span>Documents</span>
                        </FileWrapper><FileWrapper>
                            <img src={Folder} alt='folder' />
                            <span>Downloads</span>
                        </FileWrapper>
                        <FileWrapper>
                            <img src={File} alt='file' />
                            <span>text.txt</span>
                        </FileWrapper>
                    </FinderFilesWindow>

        </Rnd>
    )
}

export default LunchedApp;