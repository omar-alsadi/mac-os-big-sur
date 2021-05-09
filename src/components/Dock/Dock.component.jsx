import { AppLunched, AppName, AppWrapper, DockContainer, DockLogo } from './Dock.style';
import { useStateValue } from '../../StateProvider'
import { setAppName, openApp } from '../../actions'
import { Apps } from './DockApps'

const Dock = () => {

    const [{ appOpened, isDark }, dispatch] = useStateValue();

    const hundleChange = (app) => {
        dispatch(setAppName(app.appName));
        const AppName = app.appName;
        dispatch(openApp(AppName.toUpperCase()));
    }

    return (
        <DockContainer isDark={isDark}>
            {
                Apps.map((app, index) => {

                    return (
                        <AppWrapper key={index}>
                            <DockLogo src={app.appLogo} alt={app.appName} onClick={() => hundleChange(app)} />
                            <AppName isDark={isDark}>{app.appName}
                            </AppName>
                            { appOpened === app.appName && <AppLunched />}
                        </AppWrapper>
                    )
                })
            }

        </DockContainer>
    )

}

export default Dock;