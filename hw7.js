function setup() {                                  // Declare function
    var textInput;                                    // Create variable
    textInput = document.getElementById('miles');  // Get username input
    textInput.focus();                                // Give username focus
}

window.addEventListener('load', setup, false); // When page loaded call setup()


// function alert1() {                        // Declare function                     
//     if (isNaN(miles)) {                      // If it's not numeric
//         alert("Both entries must be numeric");
//     } else {
//         ""
//     }
// };
   
// // function alert2() {                          // Declare function
// //     if (isNaN(gallons)) {                      // If it's not numeric
// //         alert("Both entries must be numeric");
// //     } 
// //   }
   
// var miles = document.getElementById('miles');     // miles input
// // var gallons = document.getElementById('gallons');  // gallons input
   
 
// miles.addEventListener('blur', alert1, false);// blur call alert1()
// // gallons.addEventListener('blur', alert2, false);// blur call alert2()




// get the element
var button = document.getElementById("button");
 
// create an event when it's clicked
button.addEventListener("click", function(e) {
 
    e.preventDefault();
 
    // get the two elements
    var miles = document.getElementById("miles").value;
    var gallons = document.getElementById("gallons").value;
 
    // calculate and convert to integer
    var result = parseInt(miles) / parseInt(gallons);
 
    // show the result in the last box
    var resultForm = document.getElementById("result");
    resultForm.value = result;
});
