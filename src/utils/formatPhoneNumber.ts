export function formatPhoneNumer(phoneNumber: string) {
  if (phoneNumber.length === 11) {
    const ddd = phoneNumber.substr(0, 2);
    const firstPart = phoneNumber.substr(2, 5);
    const secondPart = phoneNumber.substr(7);

    return `(${ddd}) ${firstPart}-${secondPart}`;
  }

  return phoneNumber;
}
