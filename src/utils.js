const utils = {
  setLocalStorage(key, data) {
    let value;
    if (typeof data === 'string') {
      value = data;
    } else if (typeof data === 'object') {
      if (Array.isArray(data)) {
        value = JSON.stringify(data);
      } else {
        value = JSON.stringify([data]);
      }
    }
    localStorage.setItem(key, value);
  },
  getLocalStorage(key) {
    return localStorage.getItem(key);
  },
  updateLocalStorage(key, data) {
    let existingValue, update, finalValue;
    if (typeof data === 'string') {
      existingValue = localStorage.getItem(key);
      update = data;
      finalValue = existingValue.concat(',', update);
    } else if (typeof data === 'object') {
      existingValue = JSON.parse(localStorage.getItem(key));
      update = [data];
      finalValue = JSON.stringify([...existingValue, ...update]);
    }
    localStorage.setItem(key, finalValue);
  },
  clearLocalStorage(key) {
    localStorage.removeItem(key);
  },
};

export default utils;
