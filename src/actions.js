export const toggleMode = () => ({
    type: 'TOGGLE_MODE',
})

export const setAppName = (appName) => ({
    type: 'APP_OPENED',
    payload: appName
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