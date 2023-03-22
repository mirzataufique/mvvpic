
// console.log("Remove Duplicate value from array")
// var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

//             function duplicatArra(arr){
//                 return arr.filter((item,index)=>arr.indexOf(item) === index);
//             }

//             function duplicatArra2(arr){
//                 return [...new Set(arr)]
//             }

//             var arrays = ["apple", "mango", "apple", "orange", "mango", "mango"];
//             function duplicatArra3(){
//                 var arlength = arrays.length
//                 var unique = [];
//                 for(let i = 0; i <= arlength;  i++ ){
//                     if(unique.indexOf(arrays[i] === -1)){
//                         unique.push(arrays[i])
//                     }
                    
//                 }
//                 return unique;
//             }
//             ar=[1,2,3,4,2,2,4,5,9,0,0]
//             function removeDuplicates(ar){
//                 return ar.filter((item, index)=>ar.indexOf(item) ===index)
//             }

//             function removeDuplicates2(ar){
//                 return [... new Set(ar)];
//             }

//             function removeDuplicates3(ar){ // with simple loop
//                 var uniq = [];
//                 ar.forEach(element => {
//                     if(!uniq.includes(element)){
//                         uniq.push(element)
//                     }
                    
//                 });
//                 return uniq
//             }
//             function sortwithoutShortFunction(){
//                 let numArray = [10,20,17,20,5,0,20,100];
//                 // for(let i = 0; i < numArray.length; i++){
//                 //     for(let j=i+1; j < numArray.length;  j++){
//                 //         if(numArray[i] > numArray[i]){
//                 //             temp = numArray[i];
//                 //             numArray[i] = numArray[j];
//                 //             numArray[j] = temp;
//                 //         }
//                 //     }
//                 // }
//                 console.log("Sorted array=>"+numArray.reverse())
//             }

//             const a = 0;
//             function test(){
//                 const a =10;
//                 console.log(a)
                
//             }
       
//             function swapingArrayElement(){ // swap first two values
//                 let myArray = [12, -2, 55, 68, 80];
//                 // by using splice 
//                 myArray[0] = myArray.splice(1,1,myArray[0])[0];
//                 console.log(myArray)
//             }
       
//             function swapingArrayElement(){ // swap first two values
//                 let myArray = [12, -2, 55, 68, 80];
//                 // by using splice 
//                 myArray[0] = myArray.splice(1,1,myArray[0])[0];
//                 console.log(myArray)
//             }
//             function swapingArrayElementTemp(){ // swap first two values
//                 let myArray = [12, -2, 55, 68, 80];
                
//                 var temp = myArray[0];
//                 var temp2 = myArray[2]

//                 myArray[0] = myArray[1]
//                 myArray[1] = temp;


//                 myArray[2] = myArray[3]
//                 myArray[3] = temp2
//                 console.log(myArray)
//             }
        
        
//         let  testArray =[0,1,2,3,4,6,7,8,10];
//        function findMissingNumber(testArray){
        
//         // step 1- get sum of number
//         let  Sum = 0;
//         for(let i in testArray){
//             Sum += testArray[i];
            
//         }
//         console.log("SUm is-> "+Sum)

//         let n =  testArray.length+1;
//          expectedSum = Math.floor((n*(n+1))/2);
//         return expectedSum-Sum;
//        }
        
        
        



        
        //     console.log("removed duplicate value ")
        //    console.log(duplicatArra(arr))
        //    console.log(duplicatArra2(arr))
        //    console.log(duplicatArra3(arr))
        //    console.log(removeDuplicates(ar).sort())
        //    console.log(removeDuplicates2(ar).sort())
        //    console.log(removeDuplicates3(ar))
        //    sortwithoutShortFunction()
        // console.log(test())
        // swapingArrayElement();
        // swapingArrayElementTemp();
    //    console.log(findMissingNumber(testArray));

    const a1=[1,2,5,6]
    var d  = a1.map((element,index)=>{
        console.log(element*2)
    })

    console.log(a1.pop())


//     function calcluater(a1){
//         var res = [];
//         for(let i=0; i <a1.length;  i++){
//             var result = a1[i]*2;
//             res.push(result)
//         }
//         console.log(res)
//     }
// calcluater(a1)
    //output=[2,4,10,12]








