/*++++++++++++++++++++++++++++++++++++++++++++++++++
Write a function, which takes a non-negative integer (seconds) 
as input and returns the time in a human-readable format (HH:MM:SS)
*++++++++++++++++++++++++++++++++++++++++++++++++++*/


function humanReadable (seconds) {
  

let hourArr = []
let minuteArr = []
let secondArr = [];

const hour = (seconds/(60 * 60));
let band = hour.toString().split("");

for(let i=0; i<band.length; i++){
  if(band[i]=="."){
     hourArr = (band.splice(i,).join(""))
     hourArr = eval(hourArr)
     console.log("HOUR=>",hourArr)
}}

const minute = ((hourArr*(60)));
band = minute.toString().split("");


for(let i=0; i<band.length; i++){
  if(band[i]=="."){
     minuteArr =(band.splice(i,).join(""))
     minuteArr = eval(minuteArr)
     console.log("MINUTE=>",minuteArr)
}}

const second = minuteArr*60
band = second.toString().split("");

for(let i=0; i<band.length; i++){
  if(band[i]=="."){
     secondArr =(band.splice(i,).join(""))
     secondArr = eval(secondArr)
     console.log("second=>",secondArr)
}}

return `${Math.floor(hour)}:${Math.floor(minute)}:${Math.floor(second)}`
  }

console.log(humanReadable(45296));