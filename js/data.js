import {getRandomPositiveFloat, getRandomPositiveInteger} from './utils.js';

export const author = {
  avatar: `{img/avatars/user${getRandomPositiveInteger(0, 10)}.png}`
};

export const loc = {
  lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
  lng: getRandomPositiveFloat(139.70000, 139.80000, 5)
};

export const offerType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
export const time = ['12:00', '13:00', '14:00'];
export const offerFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
export const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
