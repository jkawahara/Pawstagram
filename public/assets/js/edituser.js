var $userBio = $("#user-bio");
var $userPhotoUrl = $("#user-photo-url");
var $userLocation = $("#user-location");
var $submitBtn = $("#submit");

var handleFormSubmit = function(event) {
  event.preventDefault();

  var user = {
    bio: $userBio.val().trim(),
    userPhotoUrl: $userPhotoUrl.val().trim(),
    location: $userLocation.val().trim()
  };
  if (!(user.bio && user.location && user.userPhotoUrl)) {
    alert("You must enter values for all forms!");
    return;
  }

  API.post(user).then(function() {
    refresh();
  });

  $userBio.val("");
  $userPhotoUrl.val("");
  $userLocation.val("");
};
$submitBtn.on("click", handleFormSubmit);

var API = {
  post: function(user) {
    console.log(user);
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: "/api/useredit",
      data: JSON.stringify(user)
    }).then(function() {
      alert("Added your updated info!");
    });
  },
  // get: function() {
  //   return $.ajax({
  //     url: "api/users",
  //     type: "GET"
  //   });
  // },

  //can implement delete user button for this one
  delete: function(id) {
    return $.ajax({
      url: "api/users/" + id,
      type: "DELETE"
    });
  }
};
