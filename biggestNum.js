// বৃহত্তম সংখ্যা নির্ণয়

let x = 50;
let y = 40;
let z = 100;
let biggestNumber = 0;

if(x > y && x > z){
    biggestNumber = x
}else if(y > x && y > z){
    biggestNumber = y
}else {
    biggestNumber = z
}
console.log("Biggest Num is" , biggestNumber)

//Terminal -->
//Biggest Num is 100