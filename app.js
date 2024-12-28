
//Arrow Functions//
//--Qno:1--//
var numbers=[2,7,12,24];
function squareAll(numbers){
    var newArray=[];
for(i=0;i<numbers.length;i++){
    numbers=newArray.push(Math.pow(numbers[i],2))
    return newArray;
}
console.log(squareAll(numbers));
}
//--Qno:2--//
const sumArray=(numbers)=>{
    var total=0;
    numbers.foreach((num)=>{
        total+=num;
    });
    return total;
};
//--Qno:3--//
var array=[-20,-16,-26,-4,0,7,76];
var evens=array.filter(function(x){
    if(x % 2 ===0||x===0){
        return x;
    }
})
console.log(evens);


//"Strings"//

//--Qno:4--//
function reverseString(str) {
    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
// take input from the user
const string = prompt('Enter a string: ');
const result = reverseString(string);
console.log(result);

//--Qno:5--//

var alphabets = ["c ", "x" , "y" ,"z" , "a" , "g" , "e" , "d","i" ,"o" ,"u"]
function printVowels (val){
    let vowels=[]
    for(var i=0;i< val.length ; i++){
        if(val[i] === "a"|| val[i]=== "e"|| val[i]=== "i"|| val[i]==="o"|| val[i]==="u" ){
vowels.push(val[i])
        }
    }
    return vowels
}
 console.log = printVowels(alphabets);
console.log(result);

//--Qno:6--//

function checkPalindrome(str){
    const len=str.lenght;
    for(let i=0;i<len/2;i++){
        if(string[i]!==string[len-1-i]){

        }
    }
    return "it is palindrome";
}
const str= prompt("Enter a string");
const vale=checkPalindrome(str);
console.log(vale);


//"Arrays"//

//--Qno:7--//

 const numbers =[2,4,6,10,3,8,1]
const maxNumber=(val)=>{
    var max =0;
    for(var i =0;i<val.lenght;i++){
        if(val[i]>max){
            max =val[i]
        }
            
    }
    return max
}
varresult=maxNumber(numbers)
console.log(result)

//--Qno:8--//

var arr=[1,2,3,6,5,2,2];
function removeDuplicates(arr){
    return[new Set(arr)];
}
console.log(removeDuplicates(arr));

//--Qno:9--//

let a=[10,20,30];
let b=[40,50,60];
let s =new
Set(a.concat(b));
let c=[...s];
console.log("Merged array:",c);

//"For Loops"//

//--Qno:10--//

var intNumber=prompt("Enter the integer number");
var total=1;
for(i=1;i<=intNumber;i++){
    total=total*i;
}

console.log(intNumber+'!='+total);

//"While Loops"//

//--Qno:11--//

function smOfDigits(number){
    let sum=0;
  let number=Math.abs(number);
  while (number>0) {
    let digit =number % 10;
    let sum = digit;
    let number=Math.floor(number/10);
  }
  return sum;
}
let num=123456;
console.log("sumOfDigits(num)");

//--Qno:12--//

const max=100;
const randomNum=Math.floor(Math.random()*max)+1;
let guess= gameInt(prompt("Guess the number between 1 and 100:"));
while(guess!==randomNum){
    if(guess>randomNum){
        guess=gameInt(prompt("Too high! Guess again:"));
    }
    else{
        guess=gameInt(prompt("Too low! Guess again:"));
    }
}
alert("Congratlation! You guessed the number!");


//"Do While Loops"//

//--Qno:13--//

let i=1;
do{
    console.log(i);
    i++;
}
while(i>=20);

//--Qno:14--//

var userInput;
do{
   let userInput=prompt("Enter something (type 'stop' to end):");
   console.log("You Entered:" + userInput );

} while(userInput!=="stop");
console.log("The loop has ended.");

//--"Sorted Words"--//

function sort(word){
    return word.split("").reduce((sorted,char)=>{
        let index=sorted.findIndex(c => c > char);
        if(index=== -1){
            sorted.push(char);         
}else{
    sorted.splice(index,0,char);
}
return sorted;
 },[]).join("");
}
var srt="javascript";
console.log(sort(s));

//****END****//




    
