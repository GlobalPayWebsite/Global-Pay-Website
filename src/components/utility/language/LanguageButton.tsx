/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useTranslation } from "react-i18next";
import { KeyboardEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { changeLanguage } from "@/rtk/features/multilang/MultilangSlice";
import Image from "next/image";

export const LanguageButton = () => {
    const { i18n } = useTranslation();
    const { currentLanguage: lang } = useAppSelector(state => state.language);
    const dispatch = useAppDispatch();


    const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            toggleLanguage()
        }
    }

    useEffect(() => {
        //@ts-expect-error
        window.addEventListener("keyup", handleKeyUp)
        //@ts-ignore
        return () => window.removeEventListener("keyup", handleKeyUp)
    }, [handleKeyUp])

    const toggleLanguage = () => {
        if (lang === "en") {
            dispatch(changeLanguage("jp"));
            i18n.changeLanguage("np");
        }

        if (lang === "jp") {
            dispatch(changeLanguage("en"));
            i18n.changeLanguage("en");
        }
    };


    const handleLangClick = (language: "en" | "jp") => {
        dispatch(changeLanguage(language));
        i18n.changeLanguage(language);
    };

    console.log(lang)



    return (
        <div className="flex items-center gap-5 text-xs">
            <button onClick={() => handleLangClick("en")} className="flex items-center space-x-2">
                <Image
                    src="/assets/en.png"
                    alt="English"
                    className="w-4 h-4 object-cover"
                    width={10}
                    height={10}
                    unoptimized
                />
                <span className={`${lang == "en" ? "text-black font-extrabold" : "text-gray-700"}`}>English</span>
            </button>
            <button onClick={() => handleLangClick("jp")} className="flex items-center space-x-2">
                <Image
                    src="/assets/jp.png"
                    alt="Japanese"
                    className="w-4 h-4 object-cover"
                    width={10}
                    height={10}
                    unoptimized
                />
                <span className={`${lang == "jp" ? "text-black font-extrabold" : "text-gray-700"}`}>日本語 (Japanese)</span>
            </button>
        </div>
    );
};
