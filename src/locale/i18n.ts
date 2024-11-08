import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from './translation/en.json'
import ka from './translation/ka.json'

const resources = {
    en: {
        translation: en
    },
    ka: {
        translation: ka
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ka",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;