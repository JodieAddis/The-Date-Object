// let now = new Date();//Affiche la date actuelle
// // console.log(now); 

// let dateInThePast = new Date('1990-12-25');
// //Types d'affiches possible : 
// console.log(dateInThePast.toISOString()) // 1990-12-25T00:00:00.000Z
// console.log(dateInThePast.toUTCString()) // Tue, 25 Dec 1990 00:00:00 GMT
// console.log(dateInThePast.toString()) // Tue Dec 25 1990 01:00:00 GMT+0100 (Central European Standard Time)

// //Si l'on souhaite extraire une information de la date sortie à dateInThePast
// console.log(dateInThePast.getDate()) // 25
// console.log(dateInThePast.getDay()) // 2 ( = tuesday)
// console.log(dateInThePast.getFullYear()) // 1990
// console.log(dateInThePast.getHours()) // 1 (midnight, UTC+1)
// console.log(dateInThePast.getMilliseconds()) // 0
// console.log(dateInThePast.getMinutes()) // 0
// console.log(dateInThePast.getMonth()) // 11 (! Months start at 0 !)
// console.log(dateInThePast.getSeconds()) // 0


/* Timestamps */
let christmas1995 = new Date('1995-12-25')
let halloween2002 = new Date('2002-10-30')

console.log((halloween2002.getTime() / 1000) + ' seconds have passed betweeen halloween 2002 and 1/1/1970')
console.log((halloween2002.getTime() - christmas1995.getTime()) / (1000 * 60) + ' minutes have passed betweeen halloween 2002 and c')

/* Autre application du Timestamps*/
let halloween2002 = new Date('2002-10-30')
let threeDays = 1000 * 60 * 60 * 24 * 3 // 1000 miliseconds * 60 seconds * 60 minutes * 24 hours * 3 days

let threeDaysPastHalloween2002 = new Date(
    halloween2002.getTime() + threeDays
)
console.log(threeDaysPastHalloween2002.toString())