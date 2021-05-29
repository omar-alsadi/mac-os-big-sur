import navLogo from '../../../../assest/navLogo.png'
import navLogoB from '../../../../assest/navLogo-day.png';
import { Menu, MenuList, NavLogo } from '../../Nav.style';
import { BreakLine, List, MenuListContainer } from '../MenuList.style';
import { appleMenu } from '../MenuData/Apple.menu';
import { RiArrowRightSLine } from 'react-icons/ri';
import { setActiveMenu, setCurrentMenu, toggleNavMenu } from '../../../../actions';
import { useStateValue } from '../../../../StateProvider';
import { safariMenu } from '../MenuData/Safari.menu';
import { calculatorMenu } from '../MenuData/Calculator.menu';
import { mailMenu } from '../MenuData/Mail.menu';
import { mapsMenu } from '../MenuData/Maps.menu';
import { contactMenu } from '../MenuData/Contact.menu';
import { notesMenu } from '../MenuData/Notes.menu';
import { finderMenu } from '../MenuData/Finder.menu';

const MenuBar = () => {

    const [{ isDark, appOpened, currentMenu, activeMenu }, dispatch] = useStateValue();

    // to render Menu data according which app opened
    const Data = () => {
        if (appOpened === 'Safari') {
            return safariMenu
        } else if (appOpened === 'Calculator') {
            return calculatorMenu
        } else if (appOpened === 'Mail') {
            return mailMenu
        } else if (appOpened === 'Maps') {
            return mapsMenu
        } else if (appOpened === 'Contact') {
            return contactMenu
        } else if ( appOpened === 'Notes') {
            return notesMenu
        } else {
            return finderMenu
        }
    }

    return (
        <>
        <MenuList
                    style={currentMenu === 'appleMenu' && activeMenu ? { backgroundColor: 'rgba(255,255,255,.4)'} : null}>
                    <NavLogo onClick={() => { 
                        dispatch(toggleNavMenu('APPLE_MENU'));
                        dispatch(setCurrentMenu('appleMenu'));
                        dispatch(setActiveMenu(!activeMenu));
                    }}
                        onMouseOver={() => activeMenu && dispatch(toggleNavMenu('APPLE_MENU'), dispatch(setCurrentMenu('appleMenu') ))}
                        src={isDark ? navLogo : navLogoB} alt='apple' />
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
                </MenuList>
                <Menu>
                    {
                        Data().map((list, i) =>
                            <>
                                <MenuList
                                onClick={() => {
                                    dispatch(toggleNavMenu(list.navMenu));
                                    dispatch(setCurrentMenu(list.title));
                                    dispatch(setActiveMenu(!activeMenu)); 
                                }}
                                    onMouseOver={() => activeMenu && dispatch(toggleNavMenu(list.navMenu), dispatch(setCurrentMenu(list.title)),)}
                                    style={currentMenu === list.title && activeMenu ? { backgroundColor: 'rgba(255,255,255,.4)'} : null}
                                    key={i}>{list.title}
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
                                </MenuList>
                            </>
                        )
                    }
                </Menu>
        </>
    )
}

export default MenuBar