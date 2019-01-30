// modernizr approach for checking if localStorage is available on a particular browser
export const isStorageAvailable = () => {
    let test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
};