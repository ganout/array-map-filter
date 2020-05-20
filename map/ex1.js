/* Array.prototype.map - Exercise 1

* Write the CONTENTS of the `getStringsLength` function
* It receives an array of strings as an argument
* Inside the function, use map on the array of strings, to process each string this way:
  if you get the string STR of length LEN as an input (to map's function parameter),
  you must return "STR contains N characters" as an output
* As usual: FIRST OF ALL, focus on writing the function that processes ONE string...
  Then you only need to use this function with map.

Sample INPUT array (strings) for getStringsLength:
  [
    'Chicken',
    'Bacon',
    'Tofu',
    'Mayonnaise'
  ]

Expected OUTPUT for this sample array:
  [
    'Chicken contains 7 characters',
    'Bacon contains 5 characters',
    'Tofu contains 4 characters',
    'Mayonnaise contains 10 characters'
  ]

*/

function getStringsLength(strings) {

  return strings.map(str => `${str} contains ${str.length} characters`);
}

module.exports = getStringsLength;
