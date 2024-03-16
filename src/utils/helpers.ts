export const removeSpecialCharacters = (string: string) =>
  string.replace(/[^\w\s]/gi, "");
