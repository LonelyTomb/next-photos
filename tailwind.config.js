module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/layouts/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px'
        },
        colors: {
            transparent: 'transparent',
            black: '#000000',
            white: '#FFFFFF',
            text: '#E5E5E5'
        },
        spacing: {
            px: '1px',
            '0': '0',
            '1': '0.25rem',
            '3': '0.75rem',
            '4': '1rem',
            '6': '2rem',
            'xl': '3rem',
            '2xl': '6rem'
        },
        backgroundColor: theme => ({
            ...theme('colors'),
        }),
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain'
        },
        cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer'
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '1xl': '2rem',
        },
        fontWeight: {
            normal: 'normal',
            medium: '500',
            semibold: '600',
            bold: '700',
        },
        fontFamily: {
            sans: ['Archivo', 'ui-sans-serif', 'system-ui'],
        },
        margin: (theme, {negative}) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing'))
        }),
        padding: theme => ({
            ...theme('spacing')
        }),
        maxHeight: {
            full: '100%',
            screen: '100vh'
        },
        height: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
            full: '100%',
            screen: '100vh',
        }),
        width: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            full: '100%',
            screen: '100vw',
        }),
        extend: {},
    },
    variants: {
        alignItems: ['responsive'],
        alignContent: ['responsive'],
        backgroundColor: ['hover'],
        flex: ['responsive'],
        fontSize: ['responsive'],
        gridTemplateColumns: ['responsive'],
        gridTemplateRows: ['responsive'],
        gap: ['responsive'],
        height: ['responsive'],
        justifyContent: ['responsive'],
        justifyItems: ['responsive'],
        margin: ['responsive'],
        padding: ['responsive'],
        width: ['responsive'],
        extend: {},
    },
    plugins: [],
}
