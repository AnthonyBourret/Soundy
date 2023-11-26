import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Theme/* , ThemePanel */ } from '@radix-ui/themes';
import App from './App';
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme
        accentColor="red"
        grayColor="sand"
        radius="large"
        scaling="100%"
        appearance="dark"
        className="p-5 min-h-screen"
      >
        <App />
        {/* <ThemePanel /> */}
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
);
