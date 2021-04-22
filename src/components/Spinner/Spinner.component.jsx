import Apple from '../../assest/apple.png'
import { FillLoadLine, LoadLine, Logo, SpinnerContainer } from './Spinner.style'
import StartUp from '../../assest/mac_startup.mp3'


const Spinner = () => {

    const audio = new Audio(StartUp);

    audio.volume = .2;
    audio.play();

    return (
        <SpinnerContainer>
            <Logo src={Apple} alt='apple-logo' />
            <LoadLine >
                <FillLoadLine />
            </LoadLine>
        </SpinnerContainer>
    )
}

export default Spinner