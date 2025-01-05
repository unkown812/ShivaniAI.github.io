import React from "react";
import { Language } from "../types/chat";
import { supportedLanguages } from "../utils/languages";

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  return (
    <select
      name="SelectLanguage"
      value={selectedLanguage}
      onChange={(e) => {
        console.log("Selected Language:", e.target.value);
        onLanguageChange(e.target.value);
      }}
      className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
    >
      {supportedLanguages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};
