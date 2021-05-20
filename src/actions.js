export const toggleMode = () => ({
    type: 'TOGGLE_MODE',
})

export const setAppName = (appName) => ({
    type: 'APP_OPENED',
    payload: appName
})

export const setCurrentMenu = (appName) => ({
    type: 'SET_CURRENT_MENU',
    payload: appName
})

export const setActiveMenu = (boolean) => ({
    type: 'SET_ACTIVE_MENU',
    payload: boolean
})

export const notificationPopUp = () => ({
    type: 'NOTIFICATION_POP_UP'
})

export const notificationClose = () => ({
    type: 'NOTIFICATION_CLOSE'
})

export const openApp = (app) => ({
    type: `LAUNCH_${app}_APP`
})

export const closeApp = (app) => ({
    type: `CLOSE_${app}_APP`
})

export const toggleNavMenu = (Menu) => ({
    type: `TOGGLE_${Menu}`
})

export const appClicked = () => ({
    type: 'SET_ZIndex'
})