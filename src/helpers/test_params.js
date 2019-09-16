export const testInputs = [
  ["3", "4", "5"],
  ["2", "15"],
  [],
  ["(\"eroh\", \"hero\")", "(\"HleOl\", \"HellO\")", "(\"not\", \"aword\")"],
  ["[1,2,3]", "[1,2,3,4]", "[-1, -2, -3]"]

]

export const testDescriptions = [
  [],
  [],
  [],
  ["All lowercase", "Mix of Cases", "Not an Anagram"],
  ["Simple increasing array", "Jumbled Array", "Array with Negative Numbers"]
]

export const expectedOutputs = [
  ["3", "4", "5"],
  [],
  [],
  ["true", "true", "false"],
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
