// myArray = [1, 2, 2, 2, 4, 5, 6, 3, 3, 6, 5, 9];
// obj = {};
// function duplicateValue() {
//     console.log("Removing duplicate by using Array Object==>", this.myArray);
//     for (let i of this.myArray) {
//         obj[i] = true;
//         b = Object.keys(obj);
//     }
//     console.log("===>",b);
// }
// ================================>
// let b = [];
// len = myArray.length;
// function duplicateValue() {
//     console.log("Removing duplicate by using Temporary Array==>", this.myArray);
//     for (let i=0; i<len; i++ ) {
//       if(b.indexOf(this.myArray[i]) === -1){
//           b.push(this.myArray[i]);
//       }
//     }
//     console.log("===>",b.sort());
// }

// const { mapReduce } = require("./Server/api/model/student");


// // =============================>
// // a = [1, 2, 3, 4, 5, 6, 7, 9, 10]
// myArray = [1, 2, 2, 2, 4, 5, 6, 3, 3, 6, 5, 9];
// obj = {};
// function duplicateValue() {
//     console.log("Removing duplicate by temp variable ==>", myArray);
//     mySet = [... new Set(myArray)]; // here i a using set method provided by the rxjs6 to get unique value only and convert into array by uisng square operater
//     console.log("----->",mySet);
// }

  // how to get mising Number from an array
a = [1, 2, 3, 4,5, 6,7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60];
function missingNo() {
    n = a.length + 1;
    console.log("length",n)
    ExpectedNo = 0;
    ExpectedNo = n * (n + 1) / 2; // length *(lenght+1)/2
    console.log("sum of exxpe", ExpectedNo);
    sumOfArray =0 ;
    for (i = 0; i < a.length; i++) {
        sumOfArray = sumOfArray + a[i];
    }

    console.log("The missing no from "+ a[0] +" to "+a.slice(-1)+ " is->",ExpectedNo-sumOfArray)

}
function breakArray(){
  console.log("Break Array")
}

missingNo();
breakArray();
// duplicateValue();