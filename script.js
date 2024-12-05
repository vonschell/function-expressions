var startMyDay = function () {
    return "Time for some coffee!"
};
console.log(startMyDay());

var favoriteCookie = function (cookie) {
    return `My favorite cookie is ${cookie}.`;
};
/*** console.log(favoriteCookie()); ***/
console.log(favoriteCookie("gingersnaps"));

var introduce = function (name, occupation) {
    return `Hi, my name is ${name}. I am a ${occupation}.`;
};
console.log(introduce("Zac", "pilot"));
console.log(introduce("Jeff", "singer"));

var hydrationFeedback = function () {
    var numGlasses = Number (
        prompt("How many glasses of water did you have today?")
    );
    if (numGlasses >= 8) {
        console.log("Good job!");
      } else if (numGlasses < 8) {
        console.log("Let's try to get in 8 glasses tomorrow.");
      }
};

hydrationFeedback ();
