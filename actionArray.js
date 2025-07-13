// Array Action Syntax

let students = ["Tanim", "Deep","Rimon"]
// Array ar Action ...
students.push("Uzzal") // push mane - Value  যোগ করা
students.pop() // pop mane - Value বাদ দেওয়া
students.unshift("Saidul") // unshift mane - অ্যারের শুরুর দিকে নতুন Value যোগ করা
students.shift() // shift mane - অ্যারের প্রথম Value মুছে ফেলে।


console.log(students)
console.log("Value Number",students.length) // length mane - অ্যারেতে মোট কয়টি Value আছে, তা বলে দেয়।
console.log(students.includes("Deep")) // includes mane - অ্যারেতে কোনো নির্দিষ্ট Value আছে কিনা তা চেক করে।

// Terminal -->
// [ 'Tanim', 'Deep', 'Rimon' ]
// Value Number 3
// true