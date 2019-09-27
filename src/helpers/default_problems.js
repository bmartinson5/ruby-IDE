export const default_problems = [
  "two_sum",
  "check_palindrome",
  "check_anagram",
  "reverse"
]

export const problem_names = [
  "Two Sum",
  "Palindromes",
  "Anagrams",
  "Reverse Array"
]

export const problems = [
  {
    name: "Two Sum",
    functionName: "two_sum",
    difficulty: "Medium",
    description: {
      content: "Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
      example: "Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1]."
    },
    params: ["arr", "target"],
    testInputs: ["([3, 3, 1], target=6)", "([-4, 6, -8, 1], target=-3)", "([-3, -2, -1, -9], target=-10)"],
    testDescriptions: ["All Positive Numbers", "Includes Negative Numbers", "All Negative"],
    expectedOutputs: ["[0, 1]", "[0, 3]", "[2, 3]"],
    hasSolution: "True",
    completed: "False",
  },
  {
    name: "Palindromes",
    functionName: "check_palindrome",
    difficulty: "Easy",
    description: {
      content: "Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. For the purpose of this problem, we define empty string as valid palindrome.",
      example: `Input: "A man, a plan, a canal: Panama" Output: true`
    },
    params: ["word"],
    testInputs: ["tower", "hannah", "A man, a plan, a canal: Panama"],
    testDescriptions: ["Not an Palindrome", "All Lowercase Letters", "Mixed Cases and Includes Punctuation"],
    expectedOutputs: ["false", "true", "true"],
    hasSolution: "True",
    completed: "False",
  },
  {
    name: "Anagrams",
    functionName: "check_anagram",
    difficulty: "Medium",
    description: {
      content: "Given two strings s and t , write a function to determine if t is an anagram of s.",
      example: `Input: s = "anagram", t = "nagaram" Output: true`
    },
    params: ["mixedWord", "word"],
    testInputs: ["(\"eroh\", \"hero\")", "(\"HleOl\", \"HellO\")", "(\"not\", \"aword\")"],
    testDescriptions: ["All lowercase", "Mix of Cases", "Not an Anagram"],
    expectedOutputs: ["true", "true","false"],
    hasSolution: "True",
    completed: "False",
  },
  {
    name: "Reverse Array",
    functionName: "reverse",
    difficulty: "Easy",
    description: {
      content: `Write a function that reverses a string. The input string is given as an array of characters`,
      example: `Input: ["h","e","l","l","o"] Output: ["o","l","l","e","h"]`
    },
    params: ["arr"],
    testInputs: ["[1,2,3]", "[1,2,3,4]", "[-1, -2, -3]"],
    testDescriptions: ["Simple increasing array", "Jumbled Array", "Array with Negative Numbers"],
    expectedOutputs: ["[3, 2, 1]", "[4, 6, 8, 1]", "[-3, -2, -1]"],
    hasSolution: "True",
    completed: "False",
  }

]
