var $petPhotoUrl = $("#pet-photo-url");
var $submitBtn = $("#submit");
var $petPhotos = $("#photos-container");

var currentPetId = window.location.pathname.split("/").pop();
console.log(currentPetId);
var handleFormSubmit = function(event) {
  event.preventDefault();
  var petPhoto = {
    PetId: currentPetId,
    url: $petPhotoUrl.val().trim()
  };
  if (!petPhoto.url) {
    alert("You must enter a value!");
    return;
  }
  API.post(petPhoto).then(function() {
    refresh();
  });
  $petPhotoUrl.val("");
};
$submitBtn.on("click", handleFormSubmit);

$(function() {
  $petPhotos.on("click", ".delete-picture", handleDeleteBtnClick);
});

var handleDeleteBtnClick = function() {
  var idToDelete = $(this).attr("data-id");
  API.delete(idToDelete).then(function() {
    alert("Pet Photo Deleted!");
    location.reload();
  });
};

var API = {
  post: function(petPhoto) {
    console.log(petPhoto);
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/petphotos",
      data: JSON.stringify(petPhoto)
    }).then(function() {
      alert("Added your pet photo!");
      location.reload();
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
      url: "/api/petphotos/" + id,
      type: "DELETE"
    });
  }
};
