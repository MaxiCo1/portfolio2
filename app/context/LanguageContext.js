"use client"
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Exporta useLanguage para poder usarlo en otros componentes
export const useLanguage = () => useContext(LanguageContext);
