import { useEffect, useRef, useState } from 'react';
import { EachSide, MenuIcons, MenuList, MenuStr, Nav, NavLogo, Menu } from './Nav.style'
import navLogo from '../../assest/navLogo.png'
import navLogoB from '../../assest/navLogo-day.png';
import Wifi from '../../assest/wifi.png';
import WifiB from '../../assest/wifi-day.png';
import Day from '../../assest/day.png';
import Night from '../../assest/night.png';
import SiriLogo from '../../assest/siri.png';
import CC from '../../assest/control-center-icon.png';
import Battery from '../../assest/battery.png';
import SiriLogoB from '../../assest/siri-day.png';
import CCB from '../../assest/control-center-day.png';
import BatteryB from '../../assest/battery-day.png';
import { useStateValue } from '../../StateProvider';
import { toggleMode, notificationPopUp, toggleNavMenu } from '../../actions';
import Siri from '../Notifications/Siri';
import { appleMenu } from './Menu/MenuData/Apple.menu'
import { finderMenu } from './Menu/MenuData/Finder.menu';
import { safariMenu } from './Menu/MenuData/Safari.menu';
import { ClickOutside } from './Menu/click-outside';
import { BreakLine, MenuListContainer, List } from './Menu/MenuList.style';
import { RiArrowRightSLine } from 'react-icons/ri';

const NavBar = () => {

    const [{ isDark, appOpened, notificationPop }, dispatch] = useStateValue();
    const [Time, setTime] = useState('');
    const [currentMenu, setCurrentMenu] = useState('');
    const [forceClosed, setForceClosed] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);

    const timestamp = Date.now();
    const TimeNow = new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })
        .format(timestamp);
    const TimeStr = TimeNow.replace(/,/g, ' ');

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);

        // TimeStr.includes('PM') && dispatch(toggleMode());
        return () => {
            clearInterval(interval);
        };
    }, [])

    const parentRef = useRef();

    ClickOutside(parentRef, () => {

        // set force close by clicking anywhere else makes the menu closed after clicking
        setActiveMenu(false);
        setCurrentMenu('')
        console.log('clicked!!!')
    });
    // console.log('a: ', parentRef)

    // to render Menu data according which app opened
    const Data = () => {
        if (appOpened === 'Safari') {
            return safariMenu
        } else {
            return finderMenu
        }
    }

    return (
        <Nav isDark={isDark}>
            <EachSide ref={parentRef} style={{ height: '25px' }}>
                <MenuList
                    style={currentMenu === 'appleMenu' && activeMenu ? { backgroundColor: 'rgba(255,255,255,.4)' } : null}>
                    <NavLogo onClick={() => { dispatch(toggleNavMenu('APPLE_MENU')); setActiveMenu(!activeMenu); setCurrentMenu('appleMenu') }}
                        onMouseOver={() => activeMenu && dispatch(toggleNavMenu('APPLE_MENU'), setCurrentMenu('appleMenu'))}
                        src={isDark ? navLogo : navLogoB} alt='apple' />
                </MenuList>
                <Menu>
                    {
                        Data().map((list, i) =>
                            <>
                                <MenuList onClick={() => {
                                    dispatch(toggleNavMenu(list.navMenu));
                                    setActiveMenu(!activeMenu); setCurrentMenu(list.title)
                                }}
                                    onMouseOver={() => activeMenu && dispatch(toggleNavMenu(list.navMenu), setCurrentMenu(list.title))}
                                    style={currentMenu === list.title && activeMenu ? { backgroundColor: 'rgba(255,255,255,.4)' } : null}
                                    key={i}>{list.title}</MenuList>
                                {currentMenu === list.title && activeMenu &&
                                    <MenuListContainer isDark={isDark}>
                                        {list.menu.map((i, index) =>
                                            <>
                                                <List isDark={isDark} key={index} disabled={i.disabled}>{i.title}{i.hasOptions && <span><RiArrowRightSLine /></span>}</List>
                                                {i.breakAfter && <BreakLine isDark={isDark} />}
                                            </>
                                        )}
                                    </MenuListContainer>
                                }
                            </>
                        )
                    }
                    {currentMenu === 'appleMenu' && activeMenu &&
                        <MenuListContainer isDark={isDark}>
                            {appleMenu.map((i, index) =>
                                <>
                                    <List isDark={isDark} key={index} disabled={i.disabled}>{i.title}{i.hasOptions && <span><RiArrowRightSLine /></span>}</List>
                                    {i.breakAfter && <BreakLine isDark={isDark} />}
                                </>
                            )}
                        </MenuListContainer>
                    }
                </Menu>
            </EachSide>
            <EachSide>
                <MenuStr>ABC</MenuStr>
                <MenuIcons src={isDark ? Battery : BatteryB} alt='battery' style={{ width: '20px' }} />
                <MenuIcons src={isDark ? Wifi : WifiB} alt='wifi' />
                <MenuIcons src={isDark ? Day : Night} alt='dark-mode' onClick={() => dispatch(toggleMode())} />
                <MenuIcons src={isDark ? CC : CCB} alt='control-center' />
                <MenuIcons src={isDark ? SiriLogo : SiriLogoB} alt='siri' onClick={() => dispatch(notificationPopUp())} />
                <MenuStr>
                    {TimeStr}
                </MenuStr>
            </EachSide>
            {
                notificationPop && <Siri dispatch={dispatch} />
            }
        </Nav>
    )
}

export default NavBar