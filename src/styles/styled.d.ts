import 'styled-components';

interface weights {
    value: string;
}

interface url {
    value: string;
}

interface font {
    family: string;
    weights: weights[];
    fontSize: string;
    url?: string;
    urls?: url[];
}

declare module'styled-components' {
    export interface DefaultTheme {
        title: string;
        typography: {
            fonts: font[];
            fontSize: string;
        }
        colors: {
            mainBackground: string;
            cardBackground: string;
            accent: string;

            mainHeading: string;
            stats: string;
            mainParagraph: string;
            statHeadings: string;
        };
    }
}