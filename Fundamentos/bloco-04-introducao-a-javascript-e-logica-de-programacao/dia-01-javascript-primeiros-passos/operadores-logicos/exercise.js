const currentHour = 23;
let message = "";

if (currentHour >= 22) {
    message = "We shouldn't eat anything, it's bedtime";
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Evening food, let's have dinner :D"
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Shall we make a cake for break?"
}
else if (currentHour >= 11 && currentHour <= 14) {
    message = "Lunch time!!!"
}
else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, smell of freshly brewed coffee"
}
console.log(message);