import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#ffffff',
    red: '#E24C4B',
    lightGrey: 'rgba(46, 47, 66, 0.4)',
    orange: '#FFD466',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    background: '#f5f5f5',
  },

  tratsition: '200ms cubic-bezier(0.4,0,0.2,1)',

  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
