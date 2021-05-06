import { useEffect, useState } from 'react';
import { EachSide, MenuIcons, MenuList, MenuStr, Nav, NavLogo, NavMenu } from './Nav.style'
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
import {useStateValue} from '../../StateProvider';
import { toggleMode, notificationPopUp } from '../../actions';
import Siri from '../Notifications/Siri';

const NavBar = () => {

    const [{isDark, appOpened, notificationPop} , dispatch ] = useStateValue();
    const [ Time, setTime ] = useState('');

    const timestamp = Date.now();
    const TimeNow = new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'})
    .format(timestamp);
    const TimeStr = TimeNow.replace(/,/g, ' ');

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <Nav isDark={isDark}>
            <EachSide>
                <NavLogo src={isDark ? navLogo : navLogoB} alt='apple' />
                <NavMenu>
                    <h3>{appOpened}</h3>
                    <MenuList>File</MenuList>
                    <MenuList>Edit</MenuList>
                    <MenuList>View</MenuList>
                    <MenuList>Go</MenuList>
                    <MenuList>Window</MenuList>
                    <MenuList>Help</MenuList>
                </NavMenu>
            </EachSide>
            <EachSide>
                <MenuStr>ABC</MenuStr>
            <MenuIcons src={isDark ? Battery : BatteryB} alt='battery' style={{ width:'20px'}}/>
            <MenuIcons src={isDark ? Wifi : WifiB} alt='wifi'/>
            <MenuIcons src={isDark ? Day : Night} alt='dark-mode' onClick={() => dispatch(toggleMode())}/>
            <MenuIcons src={isDark ? CC : CCB} alt='control-center'/>
            <MenuIcons src={isDark ? SiriLogo : SiriLogoB} alt='siri' onClick={() => dispatch(notificationPopUp())}/>
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