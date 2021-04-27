export const INITIAL_STATE = {
    isDark: false,
    appOpened: 'Finder',
    notificationPop : false,
    finderApp: false,
    safari: false,
    messages: false,
    mail: false,
    contacts: false,
    maps: false,
    calculator: false,
    trash: false
} 

const Reducer = (state = INITIAL_STATE, action) => {
    switch( action.type ) {
        case 'TOGGLE_MODE':
            return {
                ...state,
                isDark : !state.isDark
            }
        case 'APP_OPENED':
            return {
                ...state,
                appOpened: action.payload
            }
        case 'NOTIFICATION_POP_UP':
            return {
                ...state,
                notificationPop : true
            }
            case 'NOTIFICATION_CLOSE':
        return {
            ...state,
            notificationPop : false
        }
        case 'TOGGLE_FINDER_APP':
            return {
                ...state,
                finderApp: !state.finderApp
            }
        default: return state
    }
}

export default Reducer