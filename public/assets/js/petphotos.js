var $petPhotoUrl = $("#pet-photo-url");
var $submitBtn = $("#submit");

var currentPetId = window.location.pathname.split("/").pop();
console.log(currentPetId);
var handleFormSubmit = function(event) {
  event.preventDefault();
  console.log("something");
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
  // $exampleList.on("click", ".delete", handleDeleteBtnClick)
  // var handleDeleteBtnClick = function() {
  //   var idToDelete = $(this)
  //     .parent()
  //     .attr("data-id");
  //   API.deleteExample(idToDelete).then(function() {
  //     refreshExamples();
  //   });
  // };
};
