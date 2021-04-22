import Dock from '../Dock/Dock.component'
import NavBar from '../Nav/Nav.component'
import { DesktopWp } from './Os.style'
import DayWp from '../../assest/wp-day.jpg'
import DarkWp from '../../assest/wp-dark.jpg'
import {useStateValue} from '../../StateProvider'
import Desktop from '../Desktop/Desktop.component'

const OS = () => {

    const [{isDark} , dispatch] = useStateValue()

    return (
        <DesktopWp style={{ background: `url(${isDark ? DarkWp : DayWp})`}}>
            <NavBar />
            <Desktop />
            <Dock />
        </DesktopWp>
    )
}

export default OS