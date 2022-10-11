///1.prime nimber
// const readline = require('readline-sync')
// const number = readline.question("enter number : ")
// let isPrime = true
// if (number ==1 ||number < 1) {
//     console.log(" number is not prime");
// }
// else if ( number > 1){
//     for (let i =2; i < number;i++){
//         if (number % 2 ==0){
//             isPrime = false
//             break;
//         }
//     }
//     if (isPrime){
//         console.log("prime number");
//     }
//     else {
//         console.log("not prime number");
//     }
// }
////second method
// let number = 51
// function primeNumber(number) {
//   if (number < 2) {
//     return false
//   }
//   else if (number === 2) {
//     return true
//   }
//   else if (number > 2) {
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         console.log(number % i ,i);
//         return false
//       }
//     }
//     return true
//   }
// }
// if (primeNumber(number) == true){
//   console.log("prime");
// }
// else{
//   console.log("not");
// }


///////////////////////////////////////////////////////////////////
/// map,filter,reduce
// const arr = [5,1,3,8,10]
// const output = arr.map(triple)
// function triple(x){
//     return x*3
// }
// console.log(output);
//filter
// const arr = [5,1,3,8,10]
// const output = arr.filter(odd)
// function odd(x){
//     if (x%2 !== 0){
//         return x
//     }
// }
// console.log(output);
// reduce
// const arr = [3,5,6,8,2]
// const sum = arr.reduce(sumFunction,0)
// function sumFunction(acc,current,cur){
//     acc = acc + cur
//     return acc
// }
// console.log(sum);
// const numbers = [175, 50, 25];

// const output = numbers.reduce(myFunc,0);

// function myFunc(total, num) {
//     console.log(total,num);
//   return total - num;
// }
// console.log(output);

/////////////////////////////////
// const arr = [3, 2, 5, 11,4, 1, 0]
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       [arr[i],arr[j]] = [arr[j],arr[i]]
//     }
//   }
// }
// console.log(arr);
////////////////////////

// "use strict";

// const input = ["m","o","m","n"]
// const input1 = input.join("")
// const x = input.reverse()
// const x1  = (x.join(""));
// console.log(x);
// if (x1 === input1){
//   console.log("palindrome");
// }
// else {
//   console.log("not palindrome");
// }

// 1. toString()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const out = fruits.toString();
// console.log(typeof out);
// 2.join()

////////////////////////////////////////////////
//upper case,lower case ,number counter
// function Count(str)
//       {
//         var upper = 0,
//           lower = 0,
//           number = 0,
//           special = 0;
//         for (var i = 0; i < str.length; i++)
//         {
//           if (str[i] >= "A" && str[i] <= "Z") {
//             upper++
//             console.log(str[i]>= "A");
//             console.log(str[i],str.charCodeAt(i));
//           }

//           else if (str[i] >= "a" && str[i] <= "z") lower++;
//           else if (str[i] >= "0" && str[i] <= "9") number++;
//           else special++;
//         }
//         console.log("Upper case letters: " + upper);
//         console.log("Lower case letters : " + lower);
//         console.log("Number : " + number);
//         console.log("Special characters : " + special);
//       }

//       // Driver function
//       var str = "#GeeKs01fOr@gEEks07";
//       Count(str);


/////////////////////////////////////////////
// seprate duplicate from array
// const arr = [11,11,11,12,12,13]
// const dupl = []
// for (let i = 0;i < arr.length;i++){
//   let count = 0
//   for (let j = 0;j < arr.length;j++){
//     if (arr[i] === arr[j]){
//       count++
//     }
//     else if (count > 1) {
//       arr.splice(i,1)
//       // break
//     }
//   }
//   if (count > 1){

//     dupl.push(arr[i])
//   }

// }
// console.log(dupl,arr);
//////////////////////////////////////////////////
// Find words with both alphabets and numbers
// let str1 = "Emma25 is Data scientist50 and AI expert"
// let x = str1.split(" ")
// for (let i = 0; i < x.length;i++){
//   for (let j  of x[i]){

//     if (j >= "0" && j <= "9" ){
//       console.log(x[i]);
//       break
//     }
//   }
// }
///////////////////////////////////////////////////////////
// q.Replace each special symbol with # in the following string
// let str1 = '/*Jon is @developer & musician!!'
// for (let i of str1){
//   if (!((i >= 0 && i <= 9) || ( i >= "A" && i <= "Z") ||  ( i >= "a" && i <= "z") )) {
//    str1 = str1.replace(i,"#")
//   }
// }
// console.log(str1);
//////////////////////////////////////////////////
// str1 = 'I am 25 years and 10 months old'
// // let out = str1.split(" ")
// // console.log(out);

// // str1.splice(2,1)
// for (let i=0 ; i<str1.length; i++ ){
//   console.log("result",str1[i]);
//   if (!((str1[i] >= 0 && str1[i] <= 9) )) {
//     console.log("out",str1[i]);
//    str1 = str1.replace(str1[i],"")
//   }
// }
// console.log(str1);
//////////////////////////////////////////////////////////////
//interview question anurag pathak nmeraki
//palindrome string
// str_list = ["Emma", "Jon", "", "Kelly", null, "Eric", ""]
// for (let i in str_list){
//   if (i === ""){
//     str_list.splice(i,1)

//   }

// }
// console.log(str_list);
///////////////////////////////////////////////////
//palindrome array
// let str = ["m","o","m","o"]
// let reversed = []
// for (let i=str.length-1;i>=0;i--){
//   // reversed +=(str[i]);
//   reversed.push(str[i])
// }
// if (JSON.stringify(str) === JSON.stringify(reversed)){
//   console.log("palindrome");
// }
// else{
//   console.log("not");
// }
//////////////////////////////////////////////////////////
//interview question anurag pathak nmeraki
//choose array of element of sum of given number
// let array = [12,13,17,4,18,4,16,14]
// let empty = []
// let sum = 30
// for (let i =0;i<array.length;i++){
//   for (let j =i+1;j< array.length;j++){
//     if (array[i] + array[j] ==30){
//       empty.push([array[i],array[j]])
//     }
//   }
// }
// console.log(empty);
////////////////////////////////////////////////////////////////
// Given a number n, print n-th Fibonacci Number. 
// let f1 = 0
// let f2 =1
// let number = 8
// // 0,1,1,2,3,5,8,13,21
// console.log(f1,f2);
// if (number===1){
//   console.log(f1);
// }
// else if (number ===2){
//   console.log(f2);
// }
// for (let i =0;i<number-2;i++){
//   var f3 = f1+ f2
//   f1 = f2
//   f2 = f3
// }
// console.log(f3);
/////////
// find list of nth fibonacci number
// let list = []
// let f1 = 0
// let f2 =1
// let number = 30
// // 0,1,1,2,3,5,8,13,21
// console.log(f1,f2);
// list = [0,1]
// if (number===1){
//   console.log(f1);
//   list = [0]
// }
// else if (number ===2){
//   list = [0,1]
// }
// else {for (let i =0;i<number-2;i++){
//   var f3 = f1+ f2
//   list.push(f3)
//   f1 = f2
//   f2 = f3
// }}
// console.log(list);

//////////////////////////////////////////////////////////////
//gcd
// let num1 = 60
// let num2 = 24
// while (true ){
//   rem = num1 % num2
//   if (rem == 0){
//     console.log("gcd",num2);
//     break
//   }
//   let temp = num2
//   num2 = rem
//   num1 = temp
// }
///////////////////////////////////////////////////////////
              //armstrong number checker 
// armstrong number = 153 = (1**3+5**3+3**3)
// let arm = 154
// let armStr = arm.toString()
// // 153 = 1  + 125 27
// let sum = 0
// for (let i =0;i<armStr.length;i++){
//   sum+=(Number(armStr[i])) **3

// }
// if (sum == armStr){
//   console.log("armstr");
// }
// else{
//   console.log("no");
// }
////
//find armstrong number till given number
// let givenNumber = 1000
// for (let j=1;j<=givenNumber;j++){
//   let arm = j
//   let armStr = arm.toString()
//   let sum = 0
//   for (let i =0;i<armStr.length;i++){
//     sum+=(Number(armStr[i])) **3
//   }
//   if (sum == armStr){
//     console.log("armstr",j);
//   }
// }
/////
// Given a number N, find all armstrong numbers upto N ( N included )
// let givenNumber = 1
// let tillNum = 6
// let list = []
// // while list.length ==
// for (let j=1;j<=givenNumber;j++){
//   let arm = j
//   let armStr = arm.toString()
//   let sum = 0
//   for (let i =0;i<armStr.length;i++){
//     sum+=(Number(armStr[i])) **3
//   }
//   if (tillNum== list.length){

//     console.log(list);
//     break
//   }
//   if (sum == armStr){
//     console.log("armstr",j);
//     list.push(j)
//   }
//   givenNumber++
// }
/////////////////////////////////////////////////////////////////////
              // perfect number
// In number theory, a perfect number is a positive integer that is equal to the sum of its positive divisors,
//  excluding the number itself. For
//  instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.
///////perfect number checker
// let perfect = 16
// sum = 0
// for (let i =1;i  < perfect; i++){
//   if (perfect % i ===0){
//     (sum+=i)
//   }
// }
// if (sum === perfect){
//   console.log("perfect number");
// }
// else{
//   console.log("no");
// }
/////first nth perfect number
// let perfect = 1
// let firstN = 4
// let perfectList = []
// while (!(perfectList.length == firstN)){
//   let sum = 0
//   for (let i =1;i  < perfect; i++){
//     if (perfect % i ===0){
//       (sum+=i)
//     }
//   }
//   if (sum === perfect){
//     perfectList.push(perfect)
//   }
//   perfect++
// }
// console.log("perfect number",perfectList);
////////////////////////////////////////////////////////////////////////////////////////////////////////
          // happy mumber
// A number is called happy if it leads to 1 after a sequence of steps wherein
//  each step number is replaced by the sum of squares of its digit that is if we start with Happy Number and keep replacing 
//  it with digits square sum, we reach 1. 
// Examples : 
// Input: n = 19
// Output: True
// 19 is Happy Number,
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1
// As we reached to 1, 19 is a Happy Number.

// Input: n = 20
// Output: False
//////solution 
// let givenN = 478
// let givenNstr = givenN.toString()
// let list = []
// while (true){
//   let result = 0
//   for (let i =0;i<givenNstr.length;i++){
//      result = result + Number(givenNstr[i])**2 
//   }
//   if (list.includes(result)){
//     console.log("no happy number");
//     break
//   }
//   else if (result === 1){
//     console.log("happy number");
//     break
//   }
//   list.push(result);
//   givenNstr = result.toString()
// }
///////////////////
// let num = 15
// let sum =0
// sum = sum +  (num %10) *(num% 10)
// let x = Math.floor(num/10)*Math.floor(num/10)
// let ans = x + sum
// console.log(ans);

//////////////////////////////////////////////
//square and plus of given numbers value
// let number = 31
// let sum = 0
// flag = true
// while (flag){
//   sum += (number % 10) *(number % 10)
//   number = Math.floor(number / 10)
//   console.log(number,sum);
//   if (number <10){
//     sum+=number * number
//     flag = false
//   }
// }
// console.log(sum);
//////////////////////////////////////////////
// Check if a number is magic 
// A number is said to be a magic number, if the sum of its 
// digits are calculated till a single digit recursively by adding the 
// sum of the digits after every addition. If the single digit comes out
//  to be 1,then the number is a magic number. 

// For example- 
// Number= 50113 
// => 5+0+1+1+3=10 
// => 1+0=1 
// This is a Magic Number 
// let givenNum = 50113
// givenNum = givenNum.toString()
// while (true){
//   let sum =0
//   for (let i =0;i<givenNum.length;i++){
//     sum += Number(givenNum[i])
//   }
//   console.log(sum);
//   if (sum<10){
//     if(sum ===1){
//       console.log("magic");
//       break
//     }
//     else{
//       console.log("no");
//       break
//     }
//   }
//   else{
//     givenNum = sum.toString()
//   }
// }