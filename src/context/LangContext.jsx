import { createContext, useContext, useEffect, useState } from 'react';
const C = createContext();
export const useLang = () => useContext(C);
export function LangProvider({ children }) {
  const [lang, setLang] = useState('hi');
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const tr = (o) => (o && typeof o === 'object' ? o[lang] : o); // pick {en,hi}
  return <C.Provider value={{ lang, setLang, tr }}>{children}</C.Provider>;
}
