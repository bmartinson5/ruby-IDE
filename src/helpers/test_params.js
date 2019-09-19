export const testInputs = [
  ["([3, 3, 1], target=6)", "([-4, 6, -8, 1], target=-3)", "([-3, -2, -1, -9], target=-10)"],
  ["tower", "hannah", "A man, a plan, a canal: Panama"],
  ["(\"eroh\", \"hero\")", "(\"HleOl\", \"HellO\")", "(\"not\", \"aword\")"],
  ["[1,2,3]", "[1,2,3,4]", "[-1, -2, -3]"]

]

export const testDescriptions = [
  ["All Positive Numbers", "Includes Negative Numbers", "All Negative"],
  ["Not an Palindrome", "All Lowercase Letters", "Mixed Cases and Includes Punctuation"],
  ["All lowercase", "Mix of Cases", "Not an Anagram"],
  ["Simple increasing array", "Jumbled Array", "Array with Negative Numbers"]
]

export const expectedOutputs = [
  ["[0, 1]", "[0, 3]", "[2, 3]"],
  ["false", "true", "true"],
  ["true", "true","false"],
  ["[3, 2, 1]", "[4, 6, 8, 1]", "[-3, -2, -1]"]
]
