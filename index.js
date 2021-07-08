// Write your solution in this file!
const obj = { foo: "bar" };

const newObj = Object.assign({}, obj);

function updateDriverWithKeyAndValue(driver, key, value) {
  //   driver = {
  //     key: value
  //   };
  const newObj = { ...driver };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}
