export const safariMenu = [
    {
        title: 'Safari',
        navMenu: 'APP_MENU',
        menu: [
            {
                title: 'About Safari',
                breakAfter: false,
            },
            {
                title: 'Safari Extensions...',
                breakAfter: true,
            },
            {
                title: 'Preferences...',
                breakAfter: false,
            },
            {
                title: 'Privacy Report...',
                breakAfter: false,
            },
            {
                title: 'Settings for This Website...',
                breakAfter: true,
                disabled: true,
            },
            {
                title: 'Clear History...',
                breakAfter: true,
            },
            {
                title: 'Services',
                breakAfter: true,
                hasOptions: true
            },
            {
                title: 'Hide Safari',
                breakAfter: false,
            },
            {
                title: 'Hide Others',
                breakAfter: false,
            },
            {
                title: 'Show All',
                breakAfter: true,
                disabled: true,
            },
            {
                title: 'Quit Safari',
                breakAfter: false,
            }
        ],
    },

    {
        title: 'File',
        navMenu: 'MENU_1',
        menu: [
            {
                title: 'New Window',
            },
            {
                title: 'New Private Window',
            },
            {
                title: 'New Tab',
            },
            {
                title: 'Open File...',
            },
            {
                title: 'Open Location...',
                breakAfter: true,
            },
            {
                title: 'Close Window',
            },
            {
                title: 'Close All Windows',
            },
            {
                title: 'Close Tab',
                disabled: true,
            },
            {
                title: 'Save As...',
                disabled: true,
                breakAfter: true,
            },
            {
                title: 'Share',
                hasOptions: true
            },
            {
                title: 'Export as PDF...',
                disabled: true,
                breakAfter: true,
            },
            {
                title: 'Import From',
                breakAfter: true,
                hasOptions: true,
            },
            {
                title: 'Export Bookmarks...',
                breakAfter: true,
            },
            {
                title: 'Print...',
                disabled: true,
            },
        ]
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
                disabled: true
            },
            {
                title: 'Paste and Match Style',
                disabled: true,
            },
            {
                title: 'Delete',
                disabled: true,
            },
            {
                title: 'Select All',
                breakAfter: true,
            },
            {
                title: 'AutoFill Form',
                disabled: true,
                hasOptions: true,
            },
            {
                title: 'Find',
                hasOptions: true,
            },
            {
                title: 'Spelling and Grammar',
                hasOptions: true,
            },
            {
                title: 'Substiutions',
                hasOptions: true,
            },
            {
                title: 'Transformations',
                hasOptions: true,
            },
            {
                title: 'Speech',
                hasOptions: true,
                breakAfter: true,
            },
            {
                title: 'Start Dictation',
            },
            {
                title: 'Emoji & Symbols',
            }
        ],
    },

    {
        title: 'View',
        navMenu: 'MENU_3',
        menu: [
            {
                title: 'Customize Toolbar...',
                breakAfter: true,
            },
            {
                title: 'Show Favorites Bar',
            },
            {
                title: 'Show Tab Bar',
            },
            {
                title: 'Show Status Bar',
                breakAfter: true,
            },
            {
                title: 'Show Sidebar',
            },
            {
                title: 'Show Bookmarks Sidebar',
            },
            {
                title: 'Show Reading List Sidebar',
                breakAfter: true,
            },
            {
                title: 'Show Reader',
                disabled: true,
            },
            {
                title: 'Show Tab overview',
            },
            {
                title: 'Show Downloads',
                disabled: true,
                breakAfter: true,
            },
            {
                title: 'Stop',
                disabled: true,
            },
            {
                title: 'Reload Page',
                disabled: true,
            },
            {
                title: 'Reload With Content Blockers',
                disabled: true,
                breakAfter: true,
            },
            {
                title: 'Actual Size',
                disabled: true,
            },
            {
                title: 'Zoom In',
                disabled: true,
            },
            {
                title: 'Zoom Out',
                disabled: true,
                breakAfter: true,
            },
            {
                title: 'Text Encoding',
                hasOptions: true,
                breakAfter: true,
            },
            {
                title: 'Enter Full Screen',
            },
        ],
    },
    {
        title: 'History',
        navMenu: 'MENU_4',
        menu: [
            {
                title: 'Show All History',
                breakAfter: true,
            },
            {
                title: 'Back',
                disabled: true,
            },
            {
                title: 'Forward',
                disabled: true,
            },
            {
                title: 'Home',
            },
            {
                title: 'Search Results SnapBack',
                disabled: true,
                breakAfter: true,
            },
            {
                title: 'Recently Closed',
                hasOptions: true,
                disabled: true,
            },
            {
                title: 'Reopen Last Closed Window',
                disabled: true,
            },
            {
                title: 'Reopen All Windows from Last Session',
                breakAfter: true,
            },
            {
                title: 'Clear History...',
            },
        ]
    },
    {
        title: 'Bookmarks',
        navMenu: 'MENU_5',
        menu: [
            {
                title: 'Show Start Page',
                disabled: true,
            },
            {
                title: 'Show Bookmarks',
                disabled: true,
            },
            {
                title: 'Edit Bookmarks',
                disabled: true,
                breakAfter: true,
            },
            {
                title: 'Add Bookmarks...',
                disabled: true,
            },
            {
                title: 'Add Bookmarks for These Tabs...',
                disabled: true,
            },
            {
                title: 'Add Bookmarks Folder',
                breakAfter: true,
            },
        ]
    },
    {
        title: 'Window',
        navMenu: 'MENU_6',
        menu: [
            {
                title: 'Minimize',
                disabled: true,
            },
            {
                title: 'Zoom',
                disabled: true,
            },
            {
                title: 'Move Window to Left of Screen',
                disabled: true,
            },
            {
                title: 'Move Window to Right of Screen',
                disabled: true,
            },
            {
                title: 'Arrange Tabs By',
                hasOptions: true,
            },
            {
                title: 'Show Previous Tab',
                disabled: true,
            },
            {
                title: 'Show Next Tab',
                disabled: true,
            },
            {
                title: 'Move Tab to New Window',
                disabled: true,
                breakAfter: true,
            },
            {
                title: 'Mute This Tab',
                disabled: true,
            },
            {
                title: 'Mute Other Tabs',
                disabled: true,
                breakAfter: true,
            },
            {
                title: 'Bring All to Front',
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
                title: 'Safari Help',
                breakAfter: true,
            },
            {
                title: 'Acknowledgments'
            }
        ],
    }
]
