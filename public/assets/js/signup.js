$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  // var passwordConfirm = $("input#password-confirm");
  var fullName = $("input#fullname-input");
  // console.log(fullName.val())
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("click", function(event) {
    event.preventDefault();
    // if (passwordInput===passwordConfirm){
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        name: fullName.val().trim()
      };
    // }
    // else{
      //if the passwords don't match, informs the user of such
    //   notMatchingPassword();
    // }
      console.log(userData)
    if (!userData.email || !userData.password || !userData.name) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.name);
    emailInput.val("");
    passwordInput.val("");
    // passwordConfirm.val("");
    fullName.val("");
    
    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, name) {
      $.post("/api/signup", {
        email: email,
        password: password,
        name: name
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      }).catch(handleLoginErr);
    }
    
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    };
    
    // function notMatchingPassword() {
      //   $("#alert .msg").text("Passwords do not match!");
      //   $("#alert").fadeIn(500);
      // }
  });
});
