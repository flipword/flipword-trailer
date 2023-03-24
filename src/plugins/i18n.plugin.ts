import * as i18nEN from "../i18n/i18n-en.json";
import * as i18nFR from "../i18n/i18n-fr.json";
import * as i18nES from "../i18n/i18n-es.json";
import * as i18nDE from "../i18n/i18n-de.json";
import {useState} from "react";


const langOptions: any = [
    {
        id: "en",
        label: "English",
        json: i18nEN,
    },
    {
        id: "es",
        label: "Spanish",
        json: i18nES,
    },
    {
        id: "fr",
        label: "French",
        json: i18nFR,
    },
    {
        id: "de",
        label: "German",
        json: i18nDE,
    },
];

const useI18n = () => {
    const [currentNativeLang, setCurrentNativeLang] = useState("");
    const [currentForeignLang, setCurrentForeignLang] = useState("");

    const t = (key: string) => {
        const langIndex = langOptions.findIndex(
            (x: any) => x.id === currentNativeLang
        );
        return langIndex === -1 ? null : langOptions[langIndex].json[key];
    };

    return {
        currentNativeLang,
        setCurrentNativeLang,
        currentForeignLang,
        setCurrentForeignLang,
        t
    }
}

export default useI18n