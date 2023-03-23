import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
serviceWorkerRegistration.register();
