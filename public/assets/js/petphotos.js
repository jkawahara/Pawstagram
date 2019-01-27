var $petPhotoUrl = $("#pet-photo-url");
var $submitBtn = $("#submit");
var $petPhotos = $("#photos-container");

var currentPetId = window.location.pathname.split("/").pop();
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

$(function() {
  $(".uplike").on("click", handleLikeClick);
});
var likesObj;
var handleLikeClick = function() {
  var idToLike = $(this).attr("data-id");
  $.get("api/petphotos/" + idToLike, function(data) {
    var likesNum = data.likes;
    likesNum++;
    likesObj = { likes: likesNum };
  }).then(function() {
    API.update(idToLike).then(function() {
      location.reload();
    });
  });
};

var handleDeleteBtnClick = function() {
  var idToDelete = $(this).attr("data-id");
  API.delete(idToDelete).then(function() {
    alert("Pet Photo Deleted!");
    location.reload();
  });
};

var API = {
  post: function(petPhoto) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/petphotos",
      data: JSON.stringify(petPhoto)
    }).then(function() {
      location.reload();
    });
  },
  update: function(likeId) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: "/api/petphotos/" + likeId,
      data: JSON.stringify(likesObj)
    });
  },

  //can implement delete user button for this one
  delete: function(id) {
    return $.ajax({
      url: "/api/petphotos/" + id,
      type: "DELETE"
    });
  }
};
