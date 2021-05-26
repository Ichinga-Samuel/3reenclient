/*
 * A Simple Encryption for browser using "npm install simple-encryptor --save"
 * */

export const addToLocalStorage = (key, value) => {
    if (typeof value !== 'string') value = JSON.stringify(value);
    try {
        localStorage.setItem(key, value);
    } catch (err) {
        console.log(err);
    }
};

export const getFromLocalStorage = (key) => {
    try {
        localStorage.getItem(key);
    } catch (e) {
        return null;
    }
};

export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};

export const emptyLocalStorage = () => {
    localStorage.clear();
};

// Session Storage Helpers
export const addToSessionStorage = (key, value) => {
    if (typeof value !== 'string') value = JSON.stringify(value);
    try {
        sessionStorage.setItem(key, value);
    } catch (err) {
        console.log(err);
    }
};

export const getFromSessionStorage = (key) => {
    try {
        sessionStorage.getItem(key);
    } catch (e) {
        return null;
    }
};

export const removeFromSessionStorage = (key) => {
    sessionStorage.removeItem(key);
};

export const emptySessionStorage = () => {
    sessionStorage.clear();
};
