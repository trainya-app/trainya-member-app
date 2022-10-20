export function convertHeightNumberToString(height: number) {
  const heightString = height.toString().replace('.', ',');
  if (heightString.length > 3) {
    return `${heightString}m`;
  }

  return `${heightString}0m`;
}
