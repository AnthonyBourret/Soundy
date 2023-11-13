import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Theme, ThemePanel } from '@radix-ui/themes';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme
        accentColor="ruby"
        grayColor="sand"
        radius="large"
        scaling="100%"
        appearance="dark"
      >
        <App />
        <ThemePanel />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
);
