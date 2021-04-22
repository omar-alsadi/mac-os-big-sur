import SiriIcon from '../../assest/siri.png'
import { AppLogo, NotificationContainer } from './Notification.style'
import {notificationClose} from '../../actions'

const Siri = ({dispatch}) => {

    return (
        <NotificationContainer>
            <span onClick={() => dispatch(notificationClose())}>x</span>
            <AppLogo src={SiriIcon} alt='siri' />
            <div>
                Siri Not Available, Plaese try later.
            </div>
        </NotificationContainer>
    )
}

export default Siri