let functions = require('./run-length-encoding.js');

describe("run-length encode a string", () => {
  test("encode empty string", () => {
    expect(functions.encode("")).toEqual("");
  });

  xtest("string with only single character is encoded without count", () => {
    expect(functions.encode("X")).toEqual("X");
  });

  xtest("encode string with one character repeated multiple times", () => {
    expect(functions.encode("AAA")).toEqual("3A");
  });

  xtest("encode string with two characters repeated multiple times", () => {
    expect(functions.encode("AAABB")).toEqual("3A2B");
  });

  xtest("string with only single characters is encoded without count", () => {
    expect(functions.encode("XYZ")).toEqual("XYZ");
  });

  xtest("encode string with single characters mixed with repeated characters", () => {
    expect(
      functions.encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB")
    ).toEqual("12WB12W3B24WB");
  });

  xtest("encode string with multiple whitespaces", () => {
    expect(functions.encode("  hsqq qww  ")).toEqual("2 hs2q q2w2 ");
  });

  xtest("encode string with lowercase characters", () => {
    expect(functions.encode("aabbbcccc")).toEqual("2a3b4c");
  });
});

describe("run-length decode a string", () => {
  xtest("decode empty string", () => {
    expect(functions.decode("")).toEqual("");
  });

  xtest("decode string with single characters only", () => {
    expect(functions.decode("XYZ")).toEqual("XYZ");
  });

  xtest("decode string with one multiple character", () => {
    expect(functions.decode("2A")).toEqual("AA");
  });

  xtest("decode string with no single characters", () => {
    expect(functions.decode("2A3B4C")).toEqual("AABBBCCCC");
  });

  xtest("decode string with repeated characters with digits greater than 9", () => {
    expect(functions.decode("12W12W3B24W")).toEqual(
      "WWWWWWWWWWWWWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWW"
    );
  });

  xtest("decode string with repeated characters mixed in with single characters", () => {
    expect(functions.decode("12WB")).toEqual(
      "WWWWWWWWWWWWB"
    );
  });

  xtest("decode string with multiple whitespaces", () => {
    expect(functions.decode("2 hs2q q2w2 ")).toEqual("  hsqq qww  ");
  });

  xtest("decode string with lowercase characters", () => {
    expect(functions.decode("2a3b4c")).toEqual("aabbbcccc");
  });
});

describe("run-length encode and then decode", () => {
  xtest("encode followed by decode gives original string", () => {
    expect(functions.decode(functions.encode("zzz ZZ  zZ"))).toEqual("zzz ZZ  zZ");
  });
});
