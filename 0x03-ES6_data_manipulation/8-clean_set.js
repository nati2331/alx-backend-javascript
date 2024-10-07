export default function cleanSet(set, prefix) {
  let result = '';
  if (!prefix || !prefix.length) return result;
  for (const item of set) {
    if (item && item.startsWith(prefix)) {
      result += `${item.slice(prefix.length)}-`;
    }
  }
  return result.slice(0, result.length - 1);
}
