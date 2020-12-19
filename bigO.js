//DRILLS

// 1. What is the Big O for this?

   //1)
   //  Logarithmic time

   // 2)
   // Constant time

// 2. Even or odd

function isEven(value) {
   if (value % 2 === 0) {
       return true;
   }
   else {
       return false;
   }
 }  
 // Constant time - simply put no matter what 
//  value you place as the parameter it will not 
// affect the run time

// 3. Are you here?

function areYouHere(arr1, arr2) {
   for (let i = 0; i < arr1.length; i++) {
       const el1 = arr1[i];
       for (let j = 0; j < arr2.length; j++) {
           const el2 = arr2[j];
           if (el1 === el2) return true;
       }
   }
   return false;
} 
// Polynomial time - this function consist of nested loops 
// resulting in the time complexity growing quickly; longer 
// run time