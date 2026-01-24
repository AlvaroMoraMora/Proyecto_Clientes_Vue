import { createI18n } from 'vue-i18n';

// Importar los archivos JSON de traducciones
import es from './locales/es.json';
import en from './locales/en.json';

const i18n = createI18n({
  locale: 'es',           // Idioma por defecto
  fallbackLocale: 'en',   // Idioma de respaldo si falta una traducción
  messages: {
    es,
    en
  }
});

export default i18n;
