module.exports = {
    content: [
        './src/**/*.{html,js,jsx,ts,tsx}',
        
    ],
    theme: {
        extend: {
            screens: {
                sm: '640.1px', // => @media (min-width: 640.1px) { ... }
                md: '768.1px', // => @media (min-width: 768.1px) { ... }
                lg: '1024.1px', // => @media (min-width: 1024.1px) { ... }
                xl: '1280.1px ', // => @media (min-width: 1280.1px) { ... }
            },
            fontFamily: {
                poppins: 'Poppins',
                pangolin: 'Pangolin',
                nebulax: 'Nebulax',
                'grape-nuts': 'Grape Nuts',
                'homemade-apple': 'Homemade Apple',
                'noto-sans': 'Noto Sans',
            },
            spacing: {
                400: '29rem',
                864: '68rem',
                531: '42rem',
                766: '55rem',
            },
            boxShadow: {
                '3xl': '2px 4px 0px ',
                '4xl-inset':
                    'inset -1px -1px 2px , inset 4px 2px 2px ',
                
            },
            translate: {
                '6/5': '120%',
                '12/5': '240%',
                '18/5': '360%',
                '4/3': '133.3333333%',
                '8/3': '266.6666666%',
                '12/3': '400%',
            },
        },
    }
}