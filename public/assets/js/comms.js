// Get references to page elements
// Comms
var $commName = $("#comm-name");
var $commInfo = $("#comm-info");
var $commLocation = $("#comm-location");
var $commPhoto = $("#comm-photo");
var $submitBtn = $("#submit");
var $commList = $("#comm-list");

// The API object contains methods for each kind of request we'll make
var API = {
  post: function(comm) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/comms",
      data: JSON.stringify(comm)
    }).then(function(){
      location.reload()
    });
  },
  get: function() {
    return $.ajax({
      url: "api/comms",
      type: "GET"
    });
  },
  delete: function(id) {
    return $.ajax({
      url: "api/comms/" + id,
      type: "DELETE"
    });
  }
};

// refresh gets new comms from the db and repopulates the list
var refresh = function() {
  API.get().then(function(data) {
    var $comms = data.map(function(comm) {
      var $a = $("<a>")
        .text(comm.name)
        .attr("href", "/comm/" + comm.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": comm.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $commList.empty();
    $commList.append($comms);
  });
};

// handleFormSubmit is called whenever we submit a new comm
// Save the new comm to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var comm = {
    name: $commName.val().trim(),
    bio: $commInfo.val().trim(),
    location: $commLocation.val().trim(),
    photoUrl: $commPhoto.val().trim()
  };

  if (!(comm.name && comm.bio && comm.location && comm.photoUrl)) {
    alert("You must enter a value for all forms!");
    return;
  }

  API.post(comm).then(function() {
    refresh();
  });

  $commName.val("");
  $commInfo.val("");
  $commLocation.val("");
  $commPhoto.val("");
};

// handleDeleteBtnClick is called when an comm's delete button is clicked
// Remove the comm from the db and refresh the list
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
$commList.on("click", ".delete", handleDeleteBtnClick);
