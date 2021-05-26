export const calculatorMenu = [
    {
        title: 'Calculator',
        navMenu: 'APP_MENU',
        menu: [
            {
                title: 'About Calculator',
                breakAfter: true,
            },
            {
                title: 'Hide Calculator',
            },
            {
                title: 'Hide Others',
            },
            {
                title: 'Show All',
                disabled: true,
                breakAfter: true,
            },
            {
                title: 'Quit Calculator',
            },
        ],
    },
    {
        title: 'File',
        navMenu: 'MENU_1',
        menu: [
            {
                title: 'Close',
            },
            {
                title: 'Save Taps As...',
                breakAfter: true,
            },
            {
                title: 'Page Setup...',
            },
            {
                title: 'Print Tape...',
            },
        ],
    },

    {
        title: 'Edit',
        navMenu: 'MENU_2',
        menu: [
            {
                title: 'Undo',
                disabled: true,
            },
            {
                title: 'Redo',
                disabled: true,
                breakAfter: true,
            },

            {
                title: 'Cut',
                disabled: true,
            },
            {
                title: 'Copy',
                disabled: true,
            },
            {
                title: 'Paste',
                disabled: true,
            },
            {
                title: 'Clear',
                disabled: true,   
            },
            {
                title: 'Select All',
                disabled: true,
                breakAfter: true,
            },
            {
                title: 'Start Dictation',
            },
            {
                title: 'Emoji & Symbols',
            },
        ]
    },

    {
        title: 'View',
        navMenu: 'MENU_3',
        menu: [
            {
                title: 'Basic',
            },
            {
                title: 'Scientific',
            },
            {
                title: 'Programmer',
                breakAfter: true,
            },
            {
                title: 'Show Thousands Separators',
                breakAfter: true,
            },
            {
                title: 'RPN Mode',
                breakAfter: true,
            },
            {
                title: 'Decimal Pices',
                hasOptions: true,
            },
            {
                title: 'Enter Full Screen',
                disabled: true,
            },
        ],
    },

    {
        title: 'Convert',
        navMenu: 'MENU_4',
        menu: [
            {
                title: 'Recent conversions',
                hasOptions: true,
                breakAfter: true,
            },
            {
                title: 'Area...',
            },
            {
                title: 'Currency',
            },
            {
                title: 'Energy or Work...',
            },
            {
                title: 'Length...',
            },
            {
                title: 'Power...',
            },
            {
                title: 'Pressure...',
            },
            {
                title: 'Speed...',
            },
            {
                title: 'Temperature...',
            },
            {
                title: 'Time...',
            },
            {
                title: 'Valume...',
            },
            {
                title: 'Weights and Masses...',
            },
        ],
    },

    {
        title: 'Speech',
        navMenu: 'MENU_5',
        menu: [
            {
                title: 'Speak Button Pressed',
            },
            {
                title: 'Speak Result',
            },
        ],
    },{
        title: 'Window',
        navMenu: 'MENU_6',
        menu: [
            {
                title: 'Move Window to Left of Screen',
                disabled: true,
            },
            {
                title: 'Move Window to Right of Screen',
                disabled: true,
            },
            {
                title: 'Minimize',
                disabled: true,
            },
            {
                title: 'Zoom',
                disabled: true,
                breakAfter: true,
            },
            {
                title: 'Show Paper Tape',
                breakAfter: true,
            },
            {
                title: 'Bring All to Front',
                disabled: true,
            },
        ],
    },
    {
        title: 'Help',
        navMenu: 'MENU_7',
        menu: [
            {
                title: 'Search',
                breakAfter: true,
            },
            {
                title: 'Calculator Help',
            },
        ],
    }
]
