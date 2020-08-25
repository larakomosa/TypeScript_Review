export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
