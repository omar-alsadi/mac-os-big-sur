import { motion } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react";
import { Rnd } from "react-rnd";
import { LeftSide, RightSide, RndWrapper, TopNav } from "../LunchedApp.sytle";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { useStateValue } from '../../../StateProvider';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import TrafficBtn from "./FinderBtn.component";
import FilesWrapper from "./FinderWrapper.component";
import FinderSlider from "./FinderSlider.component";
import { appClicked, setAppName } from "../../../actions";

// ectracting positions x , y from style
const extractPositionFromTransformStyle = (transformStyle) => {
  const regexp = new RegExp('[0-9.]', 'g');
  const matched = regexp.exec(transformStyle);
  try {
    return { x: Number(matched.next().value[0]), y: Number(matched.next().value[0]) };
  } catch {
    return { x: 0, y: 0 };
  }
}

const FinderApp = () => {

  const [{ isDark, appOpened, zIndexApp }, dispatch] = useStateValue();

  const [zIndex, setzIndex] = useState(0);

  const hundleChange = (AppName) => {
    dispatch(setAppName(AppName));
  }

  useEffect(() => {
    if (appOpened === 'Finder') {
      dispatch(appClicked());
      setzIndex(zIndexApp);
    }
  }, [appOpened]);

  const containerRef = useRef();

  const windowRef = useRef();

  const originalSizeRef = useRef({ width: 0, height: 0 });

  const originalPositionRef = useRef({
    x: 0,
    y: 0,
  });

  const transitionClearanceRef = useRef();

  useEffect(() => {
    containerRef.current.focus();
  }, []);

  const MaximizeApp = () => {

    if (!windowRef.current.resizableElement || !windowRef.current.props) {
      return;
    }
    // Get desktop height and width

    const desktopHeight = document.body.clientHeight - 90;
    const deskTopWidth = document.body.clientWidth;

    // Get current width and height

    const { clientWidth: windowWidth } = window.innerWidth;
    const { clientHeight: windowHeight } = window.innerHeight;

    // Get current left and top position
    const { x: windowLeft, y: windowTop } = extractPositionFromTransformStyle(
      windowRef.current.props.style.transform,
    );

    // Only when maximizing (not dragging or resizing), should it have transaction
    windowRef.current.props.style.transition = 'height 0.5s, width 0.5s, transform 0.5s';

    // Prevent removing transition styles when multiple times of maximizing action takes place in a short period
    clearTimeout(transitionClearanceRef.current);

    // Transition style gets cleared after 0.5 second as transition only lasts 0.5 second
    transitionClearanceRef.current = setTimeout(() => {
      if (windowRef.current.props) {
        windowRef.current.props.style.transition = '';
      }
      transitionClearanceRef.current = 0;
    }, 500);

    // When it's already maximized, revert the window to the previous size
    if (windowWidth === deskTopWidth && windowHeight === desktopHeight) {
      windowRef.current.updateSize(originalSizeRef.current);
      windowRef.current.updatePosition(originalPositionRef.current);
    }
    // Maximize the window to the size of the desktop
    else {
      originalSizeRef.current = { width: windowWidth, height: windowHeight };
      originalPositionRef.current = { x: windowLeft, y: windowTop };

      windowRef.current.updateSize({
        height: desktopHeight,
        width: deskTopWidth,
      });

      windowRef.current.updatePosition({
        x: document.body.clientWidth / 2,
        y: 0,
      });

    }
  }

  const randint = (lower, upper) => {
    if (lower > upper) [lower, upper] = [upper, lower];

    return lower + Math.floor((upper - lower) * Math.random());
  }

  const randX = useMemo(() => randint(-600, 600), []);
  const randY = useMemo(() => randint(-100, 100), []);

  let X;
  let Y;

  X = ((3 / 2) * document.body.clientWidth + randX) / 2;
  Y = (100 + randY) / 2;

  const style = {
    background: ' rgb(27, 25, 30)',
    color: 'white',
    cursor: 'auto',
    border: "solid 1px rgba(221, 221, 221, 0.5)",
    borderRadius: '10px',
    zIndex: zIndex
  };

  return (
    <Rnd
      ref={(c) => {
        if (c) windowRef.current = c;
      }}
      isDark={isDark}
      style={style}
      default={{
        height: 500,
        width: 500,
        x: X,
        y: Y,
      }}
      enableResizing={true}
      dragHandleClassName="app-window-drag-handle"
      bounds="parent"
      minWidth="400"
      minHeight="400"
      onClick={() => hundleChange('Finder')}
    >
      <RndWrapper ref={containerRef} isDark={isDark} style={ isDark ? null : { background: 'rgb(255, 255, 255)'}}>

        <LeftSide isDark={isDark}>
          <TrafficBtn className='app-window-drag-handle titleBar' onMaximizedClick={MaximizeApp} AppName='FINDER' />
          <FinderSlider />
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
        <FilesWrapper />

      </RndWrapper>

    </Rnd>
  )
}

export default FinderApp;