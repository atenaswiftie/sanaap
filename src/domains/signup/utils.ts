export const phoneNumberRegex = /^09[0-9]{9}$/;
export const phoneNumberLength = 11;
export const OTPCodeLength = 5;
export const passwordRegex =
  /^[a-zA-Z0-9!@#$%^&*()_+\-=\\[\]{}|;:'",.<>/?]{6,}$/;

// GPT

export function convertToEnglishNumbers(
  input: string,
  removeNonNumeric: boolean = true
) {
  let converted = input.replace(/[۰-۹٠-٩]/g, (char) => {
    // Convert Persian and Arabic numbers to English numbers
    return String.fromCharCode(
      char.charCodeAt(0) - (char <= "۹" ? 1728 : 1584)
    );
  });

  if (removeNonNumeric) {
    converted = converted.replace(/[^0-9]/g, ""); // Remove all non-numeric characters
  }

  return converted;
}
