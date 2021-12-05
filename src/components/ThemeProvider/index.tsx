import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '~/styles/global';
import MainTheme from '~/styles/themes/main';

const ProjectThemeProvider: React.FC = ({ children }) => (
    <ThemeProvider theme={MainTheme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
);

export default ProjectThemeProvider;