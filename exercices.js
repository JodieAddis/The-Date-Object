/* Exercise 1: 
    Find the timezones of :
        Anchorage (USA)
        Reykjavik (Iceland)
        Saint-Petersburg (Russia)
        And display the date and time of these cities along with the time and date of Brussels.*/

let today= new Date(); 
//Il faut pour chaque localité rechercher la timezone, car elle ne correspond pas forcément au pays, la zone!=pays.Ensuite dans le toLocaleString() avec le format, suivi du time zone {timeZone: 'timezone/ville'}

//Belgique
console.log(today.toLocaleString('fr-BE',{timeZone: 'Europe/Brussels'})); 

//USA
console.log(today.toLocaleString('en-US',{timeZone: 'America/Anchorage'})); 

//Iceland
console.log(today.toLocaleString('en-IS',{timeZone: 'Atlantic/Reykjavik'})); 

//Russia
// console.log(today.toLocaleString('fr-EU',{timeZone: 'Europe/Moscov'})); 



/*Exercise 2
Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?
Write a function to find how many days have passed since any point in time (after 1970).*/

let birth = new Date ('1992-07-10'); 
let date = new Date (); 

console.log( (date.getTime() - birth.getTime())/ (1000*60*60*24) + 'days have passed since my birth');
/*
On prend le temps entre (1970 et aujourd'hui) - (1970 à 1992) pour calculer le temps entre 10-07-1992 et aujourd'hui. Ensuite on fait la division par 1000(=secondes)*60(minutes)*60(heures)*24(jours)
*/