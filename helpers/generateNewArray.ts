export function generateNewArray() {
  return Array.from({ length: 30 }, () => Math.ceil(Math.random() * 40));
}
