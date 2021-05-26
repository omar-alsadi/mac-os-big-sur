import Dock from '../Dock/Dock.component'
import NavBar from '../Nav/Nav.component'
import { DesktopWp } from './Os.style'
import DayWp from '../../assest/wp-day.jpg'
import DarkWp from '../../assest/wp-dark.jpg'
import { useStateValue } from '../../StateProvider'
import Desktop from '../Desktop/Desktop.component'
import { useRef } from 'react'
import ContextMenu from '../ContextMenu/ContextMenu.component'

const OS = () => {

    const [{ isDark }, dispatch] = useStateValue();
    const mainRef = useRef();

    return (
        <DesktopWp ref={mainRef} style={{ background: `url(${isDark ? DarkWp : DayWp})` }}>
            <ContextMenu mainRef={mainRef} />
            <NavBar />
            <Desktop />
            <Dock />
        </DesktopWp>
    )
}

export default OS