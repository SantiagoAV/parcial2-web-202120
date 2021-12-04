import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = ({setLanguage}) => {
  
  return (
    <select onChange={(lang)=> setLanguage(lang.target.value)}>
      <option value={LOCALES.ENGLISH}>EN</option>
      <option value={LOCALES.SPANISH}>ES</option>
    </select>
  );
};
