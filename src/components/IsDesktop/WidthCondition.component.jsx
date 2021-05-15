import Apple from '../../assest/apple.png'
import { IsDesktopContainer } from './WidthCondition.style'

const IsDesktop = () => {

    return (
        <IsDesktopContainer>
            <p>
                Please, make sure rendering app with heigher than 862px of width screen!
            </p>
        </IsDesktopContainer>
    )
}

export default IsDesktop