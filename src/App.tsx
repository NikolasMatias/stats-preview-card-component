import React from 'react';
import ProjectThemeProvider from '~/components/ThemeProvider';
import Router from '~/components/Router';

function App() {
  return (
    <ProjectThemeProvider>
      <Router />
    </ProjectThemeProvider>
  );
}

export default App;
