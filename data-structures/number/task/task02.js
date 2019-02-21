//#region Почему 6.35.toFixed(1) == 6.3?
// В математике принято, что 5 округляется вверх, например:
console.log( 1.5.toFixed(0) ); // 2
console.log( 1.35.toFixed(1) ); // 1.4
// Но почему в примере ниже 6.35 округляется до 6.3?
console.log( 6.35.toFixed(1) ); // 6.3
//#endregion