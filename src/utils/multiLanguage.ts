"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  jp: {
    translation: {
      // navigation links
      "Home": "ホーム",
      "About Us": "私たちに関しては",
      "Services": "サービス",
      "Recruitment": "採用",
      "Other Services": "その他のサービス",
      "Immigration Lawyer": "移民弁護士",
      "Contact": "連絡先"
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
