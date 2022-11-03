export const exampleUtil = (value: string) => {
  if (!value) return;

  if (value.length >= 1) {
    navigator.clipboard.writeText(value);
    alert('Copied to clipboard!');
  }
};
