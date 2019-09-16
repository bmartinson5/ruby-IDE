export const testInputs = [
  ["3", "4", "5"],
  ["2", "15"],
  [],
  [],
  ["[1,2,3]", "[1,2,3,4]"]

]

export const testDescriptions = [
  [],
  [],
  [],
  [],
  ["Simple increasing array", "Jumbled Array"]
]

export const expectedOutputs = [
  ["3", "4", "5"],
  [],
  [],
  [],
  ["[3, 2, 1]", "[4, 6, 8, 1]"]
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
