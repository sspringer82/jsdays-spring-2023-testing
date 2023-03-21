export function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hallo Welt');
    }, 1000);
  })
}