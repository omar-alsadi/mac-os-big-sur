import { AppLunched, AppName, AppWrapper, DockContainer, DockLogo } from './Dock.style';
import {useStateValue } from '../../StateProvider'
import { setAppName, toggleFinderApp } from '../../actions'
import { Apps } from './DockApps'

const Dock = () => {

    const [{appOpened}, dispatch] = useStateValue();

    const hundleChange = (app) => {
        dispatch(setAppName(app.appName));
        app.appName === 'Finder' && dispatch(toggleFinderApp());
    }

    return (
        <DockContainer>
            {
                Apps.map( (app , index) => {
                    
                    return (
                        <AppWrapper key={index}>
                        <DockLogo src={app.appLogo} alt={app.appName} onClick={() => hundleChange(app) } />
                            <AppName>{app.appName}</AppName>
                            { appOpened === app.appName && <AppLunched />}
                        </AppWrapper>
                    )
                })
            }
            
        </DockContainer>
    )

}

export default Dock;