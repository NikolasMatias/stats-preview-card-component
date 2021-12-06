import { DefaultTheme } from 'styled-components';

const main: DefaultTheme = {
    title: 'main',
    typography: {
        fonts: [
            {
                family: 'Inter',
                weights: [
                    {value: '400'},
                    {value: '700'}
                ],
                fontSize: '15px',
                url: "url('./fonts/Inter/Inter-VariableFont_slnt,wght.ttf')"
            },
            {
                family: 'Lexend Deca',
                weights: [
                    {value: '400'}
                ],
                fontSize: '15px',
                url: "url('./fonts/Lexend_Deca/LexendDeca-VariableFont_wght.ttf')"
            }
        ],
        fontSize: '15px'
    },
    colors: {
        mainBackground: 'hsl(233, 47%, 7%)',
        cardBackground: 'hsl(244, 38%, 16%)',
        accent: 'hsl(277, 64%, 61%)',
        accentBackground: 'hsla(277, 64%, 61%, 50%)',

        mainHeading: 'hsl(0, 0%, 100%)',
        stats: 'hsl(0, 0%, 100%)',
        mainParagraph: 'hsla(0, 0%, 100%, 0.75)',
        statHeadings: 'hsla(0, 0%, 100%, 0.6)',
    }
};

export default main;