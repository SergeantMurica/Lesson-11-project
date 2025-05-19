/*
Author: Alexander Castro
Course: CIS133DA
Section: Class # 21362
Lesson: 11
*/

// Get the last modified date and time
const lastModified = document.lastModified;

// Display the last modified date and time
document.getElementById("lastModified").innerHTML = lastModified;

// Function to handle form submission
function formSubmit() {
  // Check if all required fields are filled out
  if (
    document.getElementById("firstName").value === "" ||
    document.getElementById("lastName").value === "" ||
    document.getElementById("email").value === "" ||
    document.getElementById("phone").value === "" ||
    document.getElementById("comments").value === "" ||
    document.getElementById("userType").value === ""
  ) {
    alert("Please fill out all required fields.");
    return false;
  }
  // If all required fields are filled out, submit the form
  alert("Form submitted successfully!");
}

// Function to handle form reset
function formReset() {
  // Unhide the reset message element by setting its visibility to visible
  document.getElementById("resetMessage").style.visibility = "visible";
  // Hide the reset message element after 3 seconds
  setTimeout(function () {
    document.getElementById("resetMessage").style.visibility = "hidden";
  }, 3000);
}
