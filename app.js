function palindrome(str) {
    // First, get each character from the string and split it in an array
    const arr = str.split('')
  
    // Then, create a RegEx which includes letters, numbers and special characters, but doesn't include punctuation or spacing
    const regex = /^[a-zA-Z0-9!@#$%^&*+\=\[\]{}'"\\|<>\/?]*$/
  
    // Then, create a new array which filters the first array according to the regex rules and lower case all the elements
    const normArr = arr.filter(letter => regex.test(letter))
    .map(l => l.toLowerCase())
  
    //Then, create a copy of the filtered array and reverse it
    const revArr = normArr.slice('')
    revArr.reverse()
  
    //Lastly, iterate through each element in the reversed array and check whether it is different from the element in the filtered array (normArr) with the same index. If it finds any difference in elements of the same index, it means the string was not a palindrome, so it returns false
    for (let i in revArr){
      if (revArr[i] !== normArr[i]){
      return false} 
    }
  
    //If it doesn't find any difference after the loop is finished, it means it means the string was a palindrome, so it returns true
    return true
  }
  
  console.log(palindrome("race car"));
  console.log(palindrome("0_0 (: /-\ :) 0-0"));