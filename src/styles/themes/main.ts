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
                fontSize: '15px'
            },
            {
                family: 'Lexend Deca',
                weights: [
                    {value: '400'}
                ],
                fontSize: '15px'
            }
        ],
        fontSize: '15px'
    },
    colors: {
        mainBackground: 'hsl(233, 47%, 7%)',
        cardBackground: 'hsl(244, 38%, 16%)',
        accent: 'hsl(277, 64%, 61%)',

        mainHeading: 'hsl(0, 0%, 100%)',
        stats: 'hsl(0, 0%, 100%)',
        mainParagraph: 'hsla(0, 0%, 100%, 0.75)',
        statHeadings: 'hsla(0, 0%, 100%, 0.6)',
    }
};

export default main;