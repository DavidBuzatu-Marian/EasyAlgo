export function initArr(elementsSize) {
  const elements = [];

  for (let i = 0; i < elementsSize; i++) {
    elements.push(randomIntegerFromInterval(5, 600));
  }

  return elements;
}

export function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
