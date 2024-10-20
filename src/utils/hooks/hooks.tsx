"use client";
import { useAppSelector } from "@/rtk/hooks";
import { useTranslation } from "react-i18next";

interface ToggleLanguageConversionProps {
    engTxt?: string | number;
    japTxt?: string | number;
    i18Txt?: string;
}
export const useToggleLanguageConversion = () => {
    const { currentLanguage } = useAppSelector((state) => state.language);
    const { t } = useTranslation();

    const toggleLanguage = ({ engTxt, japTxt, i18Txt }: ToggleLanguageConversionProps) => {
        if (i18Txt) {
            return t(i18Txt);
        }
        return currentLanguage === "jp" ? japTxt || "" : engTxt || "";
    };

    return { toggleLanguage };
}

