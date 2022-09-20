export function convertHeightNumberToString(height: number) {
  const heightString = height.toString().replace('.', ',');

  return `${heightString}0m`;
}
