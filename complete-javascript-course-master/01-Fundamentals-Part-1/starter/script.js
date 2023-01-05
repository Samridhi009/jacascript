/* let country = 'INDIA';
let continent = 'Asia';
let population = 100000000000;
let isIsland = false;
let language;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language); */

// let , const , var 

/*const age = 21;
 const age = 22;
 console.log(age); */

 /*let population = 1000;
 console.log(population/2);
 population++;
 console.log(population);*/

 /*let India_population = 1000;
 let Finland_population = 500;
 console.log(India_population > Finland_population);*/

 /*let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
 console.log(description);*/


 //CODING CHALLENGE 1 
// test data 1

 /*let mark_weight = 78;
 let mark_height= 1.69;
 let john_weight = 92;
 let john_height = 1.95;
 let markBMI = mark_weight / mark_height ** 2;
 console.log(markBMI);

 let johnBMI = john_weight / john_height ** 2;
 console.log(johnBMI);

 let compare_BMI = (markBMI > johnBMI);
 console.log(compare_BMI);*/


 // test data 2

 /*let mark_weight = 95;
 let mark_height= 1.88;
 let john_weight = 85;
 let john_height = 1.76;
 let markBMI = mark_weight / mark_height ** 2;
 console.log(markBMI);

 let johnBMI = john_weight / john_height ** 2;
 console.log(johnBMI);

 let compare_BMI = (markBMI > johnBMI);
 console.log(compare_BMI);*/


//----------------------------------------------------------------------------------------------


 //CODING CHALLENGE 2

 /*let mark_weight = 78;
 let mark_height= 1.69;
 let john_weight = 92;
 let john_height = 1.95;
 let markBMI = mark_weight / mark_height ** 2;
 let johnBMI = john_weight / john_height ** 2;

 if(markBMI > johnBMI)
 {
    console.log(`Mark's BMI ${markBMI} is higher than John's!`);
 }
 else{
    console.log(`John's BMI ${johnBMI} is higher than Mark's!`);
 }*/


 //console.log('9' - '5');
 //console.log('19' - '13' + '17');

 /*let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
 console.log(numNeighbours);
 console.log(typeof numNeighbours);
 if(numNeighbours === 1){
   console.log('Only 1 border');
 }
else if(numNeighbours > 1){
   console.log('More than 1 border');
}
else if(numNeighbours == 0){
   console.log('No borders');
}
else{
   console.log('hello');
}*/

/*let country_population = 50;
let country_language = 'English';
let isIsland = true;
if(country_population == 50 && country_language == 'English' && isIsland == true){
 console.log('Sarah can live in this country!');
}
else{
   console.log('oops! sarah cannot live here...');
}*/

//CODING CHALLANGE 3

/*let Dolphins_avg = 97 + 112 + 101 / 3 ;
console.log(Dolphins_avg);

let Koalas_avg = 109 + 95 + 106 / 3 ;
console.log(Koalas_avg);
let min_score = 10;
if(Dolphins_avg > Koalas_avg && min_score >= 100 ){
   console.log('Dolphins_avg is winner');
}
else if(Dolphins_avg < Koalas_avg && min_score >= 100){
   console.log('Koalas_avg is winner');
}
else if(Dolphins_avg == Koalas_avg && min_score >= 100){
   console.log("It's draw!");
}
else{
   console.log('no winner');
}*/

/*let language = 'chnese';

switch (language) {
   case 'chinese':

   case 'mandarin':
      console.log('MOST number of native speakers!');
      break;

   case 'spanish':
      console.log('2nd place in number of native speakers');
      break;
      
   default:
      console.log('Great language too :D');
      break;
}*/

let country = 'India';
let population = 333;

console.log(`${country} population is ${population > 33 ? 'above' : 'below'} average` );