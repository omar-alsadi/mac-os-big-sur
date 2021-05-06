export const INITIAL_STATE = {
    isDark: false,
    appOpened: 'Finder',
    notificationPop : false,
    finder: false,
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
        case 'LAUNCH_FINDER_APP':
            return {
                ...state,
                finder: true
            }
        case 'LAUNCH_SAFARI_APP':
            return {
                ...state,
                safari: true
            }
        case 'LAUNCH_CALCULATOR_APP':
            return {
                ...state,
                calculator: true
            }
        case 'CLOSE_FINDER_APP':
            return {
                ...state,
                finder: false
            }
        case 'CLOSE_SAFARI_APP':
            return {
                ...state,
                safari: false
            }
        case 'CLOSE_CALCULATOR_APP':
            return {
                ...state,
                calculator: false
            }
        default: return state
    }
}

export default Reducer