import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <LanguageSwitcher />
      <nav>
        <ul>
          <li>{t('home')}</li>
          <li>{t('about')}</li>
          <li>{t('contact')}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;