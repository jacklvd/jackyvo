// reference: https://www.tutorialspoint.com/typing-and-deleting-effect-with-javascript-and-css
// edit from the reference above

const words = ["a Software Engineer", "a Dreamer", "Vietnamese", "a Passionate Person"];
let i = 0;
let counter;

// display the content
function typeNow() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('shuffle').innerHTML += word.shift();
        } else {
            deleteNow();
            return false;
        };
        counter = setTimeout(loopTyping, 150);
    };
    loopTyping();
};

// delete it
function deleteNow() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('shuffle').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            }
            else {
                i = 0;
            };
            typeNow();
            return false;
        };
        counter = setTimeout(loopDeleting, 75);
    };
//   time-rendering the output to the screen like fps
    setTimeout(function(){
        loopDeleting();
    }, 500);
    // loopDeleting();
};

// execute the function
typeNow();