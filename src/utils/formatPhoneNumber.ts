export function formatPhoneNumer(phoneNumber: string) {
  const ddd = phoneNumber.substr(0, 2);
  const firstPart = phoneNumber.substr(2, 5);
  const secondPart = phoneNumber.substr(7);

  return `(${ddd}) ${firstPart}-${secondPart}`;
}
