import {loc, offerFeatures, offerType, photos, time} from './data.js';
import {getRandomArrayEl, getRandomPositiveInteger} from './utils.js';

const offer = {
  title: 'some title',
  address: `${loc.lat}, ${loc.lng}`,
  price: getRandomPositiveInteger(1, 999),
  type: getRandomArrayEl(offerType),
  rooms: getRandomPositiveInteger(1, 5),
  guests: getRandomPositiveInteger(1, 8),
  checkin: getRandomArrayEl(time),
  checkout: getRandomArrayEl(time),
  features: getRandomArrayEl(offerFeatures),
  description: 'some description',
  photos: getRandomArrayEl(photos)
};

console.log(offer);
