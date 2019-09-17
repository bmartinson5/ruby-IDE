export const testInputs = [
  ["([3, 3, 1], target=6)", "([-4, 6, -8, 1], target=-3)", "([-3, -2, -1, -9], target=-10)"],
  ["tower", "hannah", "RACECAR", "RaDaR"],
  ["(\"eroh\", \"hero\")", "(\"HleOl\", \"HellO\")", "(\"not\", \"aword\")"],
  ["[1,2,3]", "[1,2,3,4]", "[-1, -2, -3]"]

]

export const testDescriptions = [
  ["All Positive Numbers", "Includes Negative Numbers", "All Negative"],
  ["Not an Palindrome", "All Lowercase Letters", "All Uppercase Letters", "Mixed Cases"],
  ["All lowercase", "Mix of Cases", "Not an Anagram"],
  ["Simple increasing array", "Jumbled Array", "Array with Negative Numbers"]
]

export const expectedOutputs = [
  ["[0, 1]", "[0, 3]", "[2, 3]"],
  ["false", "true", "true", "true"],
  ["true", "true","false"],
  ["[3, 2, 1]", "[4, 6, 8, 1]", "[-3, -2, -1]"]
]

// count_to.times do |count|
//       if count % 3 == 0
//           print "Fizz"
//       elsif count % 5 == 0
//           print "Buzz"
//       else
//           print count
//       end
//   end
