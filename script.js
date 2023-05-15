// function startMyDay() {
//   return "Time for coffee and stretches!";
// }

// console.log(startMyDay());

// function favoriteCookie(cookie) {
//   return `My favorite cookie is ${cookie}`;
// }
// console.log(favoriteCookie("peanut butter"));

// function introduce(name, occupation) {
//   return `Hello ${name}, congrats on finally becoming a ${occupation}!`;
// }
// console.log(introduce("Taylor", "software engineer"));

function hydrationFeedback() {
  var numOfGlasses = Number(
    prompt("How many glasses of water have you drank today?")
  );
  if (numOfGlasses >= 8) {
    return "Great job, you're hydrated!";
  } else {
    return "Not bad, not bad. Let’s try for a bit more tomorrow!";
  }
}
console.log(hydrationFeedback());
