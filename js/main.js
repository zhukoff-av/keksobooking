function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

const getRandomArrayEl = (arr) => {
  return arr[getRandomPositiveInteger(0, arr.length - 1)];
};

const offerType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const time = ['12:00', '13:00', '14:00'];
const offerFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

let author = {
  avatar: `{img/avatars/user${getRandomPositiveInteger(0, 10)}.png}`
};

const loc = {
  lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
  lng: getRandomPositiveFloat(139.70000, 139.80000, 5)
};

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
