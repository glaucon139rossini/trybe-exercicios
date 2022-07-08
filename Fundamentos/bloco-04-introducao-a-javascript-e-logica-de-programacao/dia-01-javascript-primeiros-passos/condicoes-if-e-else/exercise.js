const candidateScore = 86;

if (candidateScore >= 80) {
    console.log("Congratulations, you have been approved!");
}
else if (candidateScore < 80 && cancelIdleCallback >= 60) {
    console.log("You are on our waiting list");
}
else if (candidateScore < 60) {
    console.log("You were disapproved");
}