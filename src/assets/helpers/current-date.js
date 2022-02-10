export default function currentDate() {
  const TEN = 10;
  return new Date().toJSON().slice(0, TEN)
    .split('-')
    .reverse()
    .join('/');
}
