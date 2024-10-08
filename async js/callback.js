function one(tone) {
    console.log("step 1 complete");
    tone();
}
function two() {
    console.log("step 2 done");
}
one(two);