import { useStateValue } from "../../../StateProvider";
import OSApp from "../OSApp";
import { Btn, FeaturesDesc, FeaturesWrapper, WelcomeContainer, WelcomeTitle } from "./NotesApp.style";
import { features } from './Notes.features'

const NotesApp = () => {

    const [{ isDark } , dispatch ] = useStateValue();

    return (
        <OSApp width='600' height='600' AppName='NOTES' >
            <WelcomeContainer>
                <WelcomeTitle isDark={isDark}>
                    <h2>Welcome to Notes</h2>
                    <span>Great new tools for notes synced to your iCloud account.</span>
                </WelcomeTitle>
                {
                    features.map( feature => (
                        <FeaturesWrapper>
                            <img src={feature.img} alt='features' />
                            <FeaturesDesc isDark={isDark}>
                                <h4>{feature.title}</h4>
                                <span>{feature.desc}</span>
                            </FeaturesDesc>
                        </FeaturesWrapper>
                    ))
                }
                
                <Btn>Continue</Btn>
            </WelcomeContainer>

        </OSApp>
    )
}

export default NotesApp;