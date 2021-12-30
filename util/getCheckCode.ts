const values = [
  1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 0, 7, 0, 9, 2, 3, 4, 5, 6, 7, 8, 9,
];
const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

export function getCheckCode(vin: string) {
  if (vin.length !== 17) {
    throw new Error("invalid length");
  }
  if (vin[7]! == "-") {
    throw new Error('Missing "-" at position 7');
  }

  let sum = 0;
  let c;
  let val = 0;
  for (let i = 0; i < 17; i++) {
    c = vin[i];
    if (c >= "A" && c <= "Z") {
      val = values[c.charCodeAt(0) - "A".charCodeAt(0)];
    } else if (c >= "0" && c <= "9") {
      val = c.charCodeAt(0) - "0".charCodeAt(0);
    } else if (c !== "-") {
      throw new Error(`bad char: ${c}`);
    }
    sum = sum + weights[i] * val;
  }
  sum = sum % 11;

  if (sum == 10) return "X";
  else return "" + sum;
}
