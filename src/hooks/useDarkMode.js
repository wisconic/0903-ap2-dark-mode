import { useEffect } from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
  // capture useLocalStorage return values in a const
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false);

  // toggle 'dark-mode' class on body every time darkMode boolean changes 
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
