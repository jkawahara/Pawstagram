// Wait for DOM to be fully loaded before attaching handlers
$(function() {
  // $("#submit").on("click", function(event) {
  //   var id = $(this).data("id");
  //   var newDevour = $(this).data("newdevour");

  //   var newDevourState = {
  //     devoured: newDevour
  //   };
  // });

  $(".new-user").on("#submit", function(event) {
    console.log($(this).attr("id"));
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var newUser = {
      name: $("#user-name").val().trim(),
      email: $("#user-email").val().trim(),
      password: $("#user-password").val().trim(),
      communities: $("#user-communities").val().trim(),
    };
    console.log(newUser);
  });
});
