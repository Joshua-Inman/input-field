// Input field for text:
function textInput() {
  // If "ENTER" is pressed:
  if (event.keyCode === 13 || event.which === 13) {
    // Button next to text input field is clicked:
    document.getElementById('button-input').click();
  }
}

// Button to submit user input: 
function buttonInput() {
  console.log('User input:');
  // Stores user's input into a variable:
  var userInput = document.getElementById('text-input').value;
  console.log(userInput);
  // Clears user's input from text field:
  document.getElementById('text-input').value = "";
  // Outputs to the user their input has been successfully submitted.
  document.getElementById('output').innerHTML = "<span style='color:limegreen;'>Thank you, your input was successfully submitted.</span>";
  console.log('Thank you, your input was successfully submitted.');
}