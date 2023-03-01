import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/theme/globalStyle';
import { defaultTheme } from '../src/theme';

const ThemeDecorator = storyFn => (
  <>
    <main id="app-root">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
    </main>
  </>
);

addDecorator(ThemeDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
