/* Exercise 1: 
    Find the timezones of :
        Anchorage (USA)
        Reykjavik (Iceland)
        Saint-Petersburg (Russia)
        And display the date and time of these cities along with the time and date of Brussels.*/

// let today= new Date(); 
//Il faut pour chaque localité rechercher la timezone, car elle ne correspond pas forcément au pays, la zone!=pays.Ensuite dans le toLocaleString() avec le format, suivi du time zone {timeZone: 'timezone/ville'}

//Belgique
// console.log(today.toLocaleString('fr-BE',{timeZone: 'Europe/Brussels'})); 

// //USA
// console.log(today.toLocaleString('en-US',{timeZone: 'America/Anchorage'})); 

// //Iceland
// console.log(today.toLocaleString('en-IS',{timeZone: 'Atlantic/Reykjavik'})); 

//Russia
// console.log(today.toLocaleString('fr-EU',{timeZone: 'Europe/Moscov'})); 



/*Exercise 2
Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?
Write a function to find how many days have passed since any point in time (after 1970).*/

// let birth = new Date ('1992-07-10'); 
// let date = new Date (); 

// console.log( (date.getTime() - birth.getTime())/ (1000*60*60*24) + 'days have passed since my birth');
/*
On prend le temps entre (1970 et aujourd'hui) - (1970 à 1992) pour calculer le temps entre 10-07-1992 et aujourd'hui. Ensuite on fait la division par 1000(=secondes)*60(minutes)*60(heures)*24(jours)
*/

// let now = new Date (); 
// console.log(now);

// function daysPass (){
    // let past = year + month + day ; 
// }





/* Exercise 3
Using timestamps, find the exact time and date we will be in 80000 hours.

Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input. */

// let today = new Date(); 
// let futureDate = 1000*60*60*80000; // 1000 miliseconds * 60 seconds * 60 minutes * 80.000 hours
// // console.log(futureDate);//Ok

// let newDate = new Date (today.getTime() + futureDate);
// console.log(newDate.toString());//Ok

let today = new Date(); 
let hoursInput = document.querySelector('.timepass_new_date'); 
console.log(hoursInput); 
let submit = document.querySelector('.button_submit')

