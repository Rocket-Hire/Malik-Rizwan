//Task#1
// Given a string s, return true if s is palindrome.
// An sting is a palindrome when it reads the same backward as forward.
// Example#1, input: abcba  Output: true.
// Example#4 input: yoyoy Output: true yoyoy yoyoy
// Example#5 input: yoyo Output: false yoyo oyoy
// Example#2, input: abcbc  Output: false.
// Example#3, input: abc  Output: false.

//yoyyoy

var isPalindrome = function(s) {
  const arr = s.length;
  for ( let i=0; i<s.length/2;i++){
  if( s[i] !== s[s.length-1-i]){
    return  "true"  ;
  }
    return "false";
    }
};


// const x=  isPalindrome("abca");
// console.log(x);

// Question: Common letters and their frequencies
// Given a function which takes an array of words as input, find the common letters among the words and their frequency. Return the letters with their frequency.

// Example 1:
// Input: words = ["browser","brother","brand"]
// Output: b:3,r:3,o:2,e:2

// Example 2:
// Input: words = ["cat","dog","zebra"]
// Output: a:2

// Example 3:
// Input: words = ["car","wish"]
// Output: ""

var FindCommonFrequencies = function(arr) {
  var  arr1=arr.split("");
  for (var i=0;i<arr1.length;i++){
    var a =0;
    for (var j=0 ; j<arr1.length; j++){
      if (arr1[i]==arr[j+1]){
        arr[j]=arr[j]+1;
        a++;
      }
    }
  }
};

const words = ["browse","brothe","brand"]
const x =  FindCommonFrequencies(words);
// console.log(x);

// Databases
// Employee

// Id      Name      Position          Team

// 1      Zahid    Software Engineer   Analytics

// 2      Sara      Manager            Marketing

// Write a query to get the name and team of all.
SELECT  Name, Team  FROM Employee 

















// Inventory          
// Id          Item                Purchase Date      EmpId

// 1          Dell 451            22 Dec 2022           1

// 2          Lenovo 225          14 Dec 2022           2

// 3          Samsung LED 9004    10 Dec 2022           2

// 4          IPTech mouse 771    2 Jan 2023           2

// 5          Keyboard TF 902      6 Jan 2023           1

// 6          Keyboard YK 882      19 Oct 2022           2

