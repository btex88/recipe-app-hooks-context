export default function randId() {
  const HEXA = 16;
  return Date.now().toString(HEXA * 2) + Math.random().toString(HEXA * 2).substring(2);
}
