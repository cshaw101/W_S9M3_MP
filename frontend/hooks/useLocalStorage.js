import { useState } from "react";

export const useInput = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    const handleChanges = updateValue => {
        setValue(updateValue)
    };
    return [value, setValue, handleChanges]
}

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    console.log([storedValue,setValue])
    return [storedValue, setValue]
}