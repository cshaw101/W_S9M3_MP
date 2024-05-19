import { useLocalStorage } from './useLocalStorage';

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', false);
  
    return [isDarkMode, setIsDarkMode];
}

export default useDarkMode;
