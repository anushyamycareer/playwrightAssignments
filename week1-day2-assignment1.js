/* Assignment Details:  
Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a 
palindrome, then test your function with various strings and print the results. 
 
Assignment Requirements:  
Write a function to reverse the string. 
1. Convert the input into characters 
2. Loop them in reverse direction 
3. Concatenate the string 
4. Print the new string 
Write a function to check the given string is a palindrome 
[If the given string and reverse string are the same, it is a palindrome] 
1. Check if the reverse string and original string are the same 
2. Return true if same, else the false. 
 
Hints to Solve:  
1. Split string into characters using `split("")`. 
2. Iterate backward through characters to build reversed string. 
3. Use strict equality to compare original and reversed strings for palindrome check.
*/

let arrayofStrings = ["Madam", "Hello", "Racecar", "JavaScript", "Level", "Palindrome", "Civic"];

for (let i = 0; i < arrayofStrings.length; i++) {
        let currentStr = arrayofStrings[i]; 
        let reversedStr = reverseString(currentStr); 
        //console.log(`Reversed string of ${currentStr} is: ${reversedStr}`);
        isPalindrome(currentStr);
}

function reverseString(currentStr) {
    let stringChars = currentStr.split("");
    let stringLength = stringChars.length;
    let reversedStr = "";

    for (let i = stringLength - 1; i >= 0; i--) {
        reversedStr += stringChars[i];
    }
    
    return reversedStr;
}

function isPalindrome(currentStr) {
    const reversedStr = reverseString(currentStr);
    const lowerCurrentStr = currentStr.toLowerCase();
    const lowerReversedStr = reversedStr.toLowerCase();

    if (lowerCurrentStr === lowerReversedStr) {
        console.log(`The string "${currentStr}" is a Palindrome`);
    } else {
        console.log(`The string "${currentStr}" is NOT a Palindrome`);
    }
}