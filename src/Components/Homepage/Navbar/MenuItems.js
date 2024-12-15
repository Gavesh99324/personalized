export const MenuItems = [
    {
        title: 'Home',
        url: '/',
        cName: 'nav-links'
    },
    {
        title: 'Journal',
        url: '/journal',
        cName: 'nav-links'
    },
    {
        title: 'ChatWithUs',
        url: '/chatbot',
        cName: 'nav-links'
    },
    {
        title: 'Login',
        url: '/login',
        cName: 'nav-links'
    },
    {
        title: 'Services',
        url: '#',
        cName: 'nav-links',
        dropdown: [
            {
                title: 'Mood Tracking',
                url: '/mood-tracking',
                cName: 'dropdown-links'
            },
            {
                title: 'Guided Exercises',
                url: '/guided-exercises',
                cName: 'dropdown-links'
            },
            {
                title: 'Journal',
                url: '/journal',
                cName: 'dropdown-links'
            },
            {
                title: 'AI-Powered Insights',
                url: '/ai-insights',
                cName: 'dropdown-links'
            },
            {
                title: 'Resource Library',
                url: '/resource-library',
                cName: 'dropdown-links'
            }
        ]
    }
];
