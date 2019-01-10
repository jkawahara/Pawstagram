// Get references to page elements
// Users
var $userPhotoUrl = $("#user-photo-url");
var $userName = $("#user-name");
var $userEmail = $("#user-email");
var $userPassword = $("#user-password");
var $submitBtn = $("#submit");
var $userList = $("#user-list");

// The API object contains methods for each kind of request we'll make
var API = {
  post: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(user)
    });
  },
  get: function() {
    return $.ajax({
      url: "api/users",
      type: "GET"
    });
  },
  delete: function(id) {
    return $.ajax({
      url: "api/users/" + id,
      type: "DELETE"
    });
  }
};

// refresh gets new users from the db and repopulates the list
var refresh = function() {
  API.get().then(function(data) {
    var $users = data.map(function(user) {
      var $a = $("<a>")
        .text(user.name)
        .attr("href", "/user/" + user.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": user.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $userList.empty();
    $userList.append($users);
  });
};

// handleFormSubmit is called whenever we submit a new user
// Save the new user to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var user = {
    userPhotoUrl: $userPhotoUrl.val().trim(),
    name: $userName.val().trim(),
    email: $userEmail.val().trim(),
    password: $userPassword.val().trim()
  };

  if (!(user.userPhotoUrl && user.name && user.email && user.password)) {
    alert("You must enter URL, name, email and password!");
    return;
  }

  API.post(user).then(function() {
    refresh();
  });

  $userPhotoUrl.val("");
  $userName.val("");
  $userEmail.val("");
  $userPassword.val("");
};

// handleDeleteBtnClick is called when an user's delete button is clicked
// Remove the user from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.delete(idToDelete).then(function() {
    refresh();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$userList.on("click", ".delete", handleDeleteBtnClick);
