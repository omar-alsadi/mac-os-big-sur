export const INITIAL_STATE = {
    appOpened: 'Finder',
    activeMenu: false,
    currentMenu: '',
    isDark: false,
    notificationPop: false,
    finder: false,
    safari: false,
    messages: false,
    mail: false,
    contacts: false,
    maps: false,
    calculator: false,
    trash: false,
    appleMenu: false,
    appMenu: false,
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
    menu6: false,
    menu7: false,
    zIndexApp: 0,
}

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_MODE':
            return {
                ...state,
                isDark: !state.isDark
            }
        case 'APP_OPENED':
            return {
                ...state,
                appOpened: action.payload,
                activeMenu: false,
            }
        case 'NOTIFICATION_POP_UP':
            return {
                ...state,
                notificationPop: true
            }
        case 'NOTIFICATION_CLOSE':
            return {
                ...state,
                notificationPop: false
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
        case 'SET_ZIndex':
            return {
                ...state,
                zIndexApp: state.zIndexApp + 2,
                activeMenu: false
            }
        case 'SET_CURRENT_MENU':
            return {
                ...state,
                currentMenu: action.payload,
            }
        case 'SET_ACTIVE_MENU':
            return {
                ...state,
                activeMenu: action.payload,
            }
        case 'TOGGLE_APPLE_MENU':
            return {
                ...state,
                appleMenu: !state.appleMenu,
                appMenu: false,
                menu1: false,
                menu2: false,
                menu3: false,
                menu4: false,
                menu5: false,
                menu6: false,
                menu7: false
            }
        case 'TOGGLE_APP_MENU':
            return {
                ...state,
                appMenu: !state.appMenu,
                appleMenu: false,
                menu1: false,
                menu2: false,
                menu3: false,
                menu4: false,
                menu5: false,
                menu6: false,
                menu7: false
            }
        case 'TOGGLE_MENU_1':
            return {
                ...state,
                appleMenu: false,
                appMenu: false,
                menu1: !state.menu1,
                menu2: false,
                menu3: false,
                menu4: false,
                menu5: false,
                menu6: false,
                menu7: false
            }
        case 'TOGGLE_MENU_2':
            return {
                ...state,
                appleMenu: false,
                appMenu: false,
                menu1: false,
                menu2: !state.menu2,
                menu3: false,
                menu4: false,
                menu5: false,
                menu6: false,
                menu7: false
            }
        case 'TOGGLE_MENU_3':
            return {
                ...state,
                appleMenu: false,
                appMenu: false,
                menu1: false,
                menu2: false,
                menu3: !state.menu3,
                menu4: false,
                menu5: false,
                menu6: false,
                menu7: false
            }
        case 'TOGGLE_MENU_4':
            return {
                ...state,
                appleMenu: false,
                appMenu: false,
                menu1: false,
                menu2: false,
                menu3: false,
                menu4: !state.menu4,
                menu5: false,
                menu6: false,
                menu7: false
            }
        case 'TOGGLE_MENU_5':
            return {
                ...state,
                appleMenu: false,
                appMenu: false,
                menu1: false,
                menu2: false,
                menu3: false,
                menu4: false,
                menu5: !state.menu5,
                menu6: false,
                menu7: false
            }
        case 'TOGGLE_MENU_6':
            return {
                ...state,
                appleMenu: false,
                appMenu: false,
                menu1: false,
                menu2: false,
                menu3: false,
                menu4: false,
                menu5: false,
                menu6: !state.menu6,
                menu7: false,
            }
        case 'TOGGLE_MENU_7':
            return {
                ...state,
                appleMenu: false,
                appMenu: false,
                menu1: false,
                menu2: false,
                menu3: false,
                menu4: false,
                menu5: false,
                menu6: false,
                menu7: !state.menu7,
            }
        default: return state
    }
}

export default Reducer