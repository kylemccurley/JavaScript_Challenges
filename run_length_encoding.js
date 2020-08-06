function encode(str) {
  let current_char = str[0]; // a
  let count = 0;
  let encodedString = '';
  for(let i = 0; i < str.length; i++) {
    var char = str[i]; // a
    if (current_char === char) {
      count++;
    } else if (current_char !== char) {
      if (count === 1) {
        encodedString += current_char
      } else {
        encodedString += current_char;
        encodedString += count;
      }

      count = 1;
      current_char = char;
    }
  }
  // If there is a leftover character
  if (char) {
    encodedString += char;
    encodedString += count;
  }

  return encodedString;
}
