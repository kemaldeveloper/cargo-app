import localforage from 'localforage';

localforage.config({
  name: 'cargoApp',
  storeName: 'cargoStore',
});

export const getItemFromLocalForage = key => {
  return localforage.getItem(key);
};

export const setItemFromLocalForage = (key, value) => {
  return localforage.setItem(key, value);
};

export const removeItemFromLocalForage = key => {
  return localforage.removeItem(key);
};

export const clearLocalForage = () => {
  return localforage.clear();
};
