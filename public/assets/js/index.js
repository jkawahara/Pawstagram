// Wait for DOM to be fully loaded before attaching handlers
$(function() {
  $(".new-user").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUser = {
      userPhotoUrl: $("#user-url")
        .val()
        .trim(),
      name: $("#user-name")
        .val()
        .trim(),
      email: $("#user-email")
        .val()
        .trim(),
      password: $("#user-password")
        .val()
        .trim(),
      communities: $("#user-communities")
        .val()
        .trim()
    };
    console.log(newUser);
    // HTTP POST request to add new user
    $.ajax("/api/users", {
      type: "POST",
      data: newUser
    }).then(function() {
      console.log("created new user");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".new-pet").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPet = {
      name: $("#pet-name")
        .val()
        .trim(),
      species: $("#pet-species")
        .val()
        .trim(),
      age: parseInt(
        $("#pet-age")
          .val()
          .trim()
      ),
      profPic: $("#pet-profPic")
        .val()
        .trim(),
      UserId: 1
    };
    console.log(newPet);
    // HTTP POST request to add new pet
    $.ajax("/api/pets", {
      type: "POST",
      data: newPet
    }).then(function() {
      console.log("created new pet");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
