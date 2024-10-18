import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Home from './components/Home';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Home />
      </div>
    </I18nextProvider>
  );
};

export default App;