// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// We avoid the above type of comparisons
//****The reason is that an equality check == and comaprisons >,<,>=,<= work differently. Comparisons convert null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false. ****//

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);
// We avoid the above type of comparisons

// === means strict check i.e it not only checks value it also checks their datatype //
console.log("2" == 2);
console.log("2" === 2);