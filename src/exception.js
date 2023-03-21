export function add(a, b) {
  if (typeof a !== 'nunber' || typeof b !== 'number') {
    throw new Error('unable to add things');
  }

  return a + b;
}