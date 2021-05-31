import { useStateValue } from "../../../StateProvider";
import OSApp from "../OSApp";
import { WelcomeContainer, WelcomeTitle } from "./TempApp.style";
import { TempApps } from './TempApp'

const TempApp = (tempAppName) => {

    const [{ isDark } , dispatch ] = useStateValue();
    
    // tempororay app window
    return (
        <OSApp width='500' height='500' AppName={tempAppName.tempAppName} >
            <WelcomeContainer>
                {
                    TempApps.map( (app, index) => {
                        if ( app.appName === tempAppName.tempAppName) {
                        return  (
                            <WelcomeTitle isDark={isDark} key={index}>
                                <img src={app.appLogo} alt='apps' />
                                <h2>{app.appName} will add soon</h2>
                            </WelcomeTitle>
                            )
                        }
                    })
                }
                
            </WelcomeContainer>

        </OSApp>
    )
}

export default TempApp;