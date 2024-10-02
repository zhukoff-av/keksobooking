const randomValue = (min, max, pointNumber) => {
  let result;
  if(min >= 0 && max >= 0){
    result = (Math.random() * (max - min)) + min;
    return result.toFixed(pointNumber);
  }
};

console.log(randomValue(5,20,2));
