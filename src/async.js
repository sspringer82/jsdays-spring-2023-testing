export function withCallback(cb) {
  cb('Hello World');
}

export function createRandomNumber(randomFn, size) {
  return Math.floor(randomFn() * size);
}
