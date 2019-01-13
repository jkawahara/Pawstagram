// Get references to page element
// Pets
var $petUser = $("#pet-user");
var $petName = $("#pet-name");
var $petSpecies = $("#pet-species");
var $petBreed = $("#pet-breed");
var $petSize = $("#pet-size");
var $petAge = $("#pet-age");
var $petBio = $("#pet-bio");
var $petProfPic = $("#pet-prof-pic");
var $submitBtn = $("#submit2");
var $petList = $("#pet-list");

// The API object contains methods for each kind of request we'll make
var API = {
  post: function(pet) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/pets",
      data: JSON.stringify(pet)
    }).then(function() {
      alert("Added your pet");
    });
  },
  get: function() {
    return $.ajax({
      url: "api/pets",
      type: "GET"
    });
  },
  delete: function(id) {
    return $.ajax({
      url: "api/pets/" + id,
      type: "DELETE"
    });
  }
};

// refresh gets new pets from the db and repopulates the list
var refresh = function() {
  API.get().then(function(data) {
    var $pets = data.map(function(pet) {
      var $li = $("<li>").attr({
        "data-id": pet.id
      });

      var $a = $("<a>")
        .text(pet.name)
        .attr("href", "/pet/" + pet.id)
        .attr("class", "btn btn-primary btn-link btn-wd btn-lg")
        .append($li);

      return $a;
    });

    $petList.empty();
    $petList.append($pets);
  });
};

// handleFormSubmit is called whenever we submit a new pet
// Save the new pet to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var pet = {
    UserId: userId,
    name: $petName.val().trim(),
    species: $petSpecies.val().trim(),
    breed: $petBreed.val().trim(),
    size: $petSize.val().trim(),
    age: parseInt($petAge.val().trim()),
    bio: $petBio.val().trim(),
    profPic: $petProfPic.val().trim()
  };
  console.log(pet);

  if (
    !// pet.UserId &&
    (
      pet.name &&
      pet.species &&
      pet.breed &&
      pet.size &&
      pet.age &&
      pet.bio &&
      pet.profPic
    )
  ) {
    alert("You must enter values for all forms!");
    return;
  }

  API.post(pet).then(function() {
    refresh();
  });

  $petUser.val("");
  $petName.val("");
  $petSpecies.val("");
  $petBreed.val("");
  $petSize.val("");
  $petAge.val("");
  $petBio.val("");
  $petProfPic.val("");
};

// handleDeleteBtnClick is called when an pet's delete button is clicked
// Remove the pet from the db and refresh the list
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
$petList.on("click", ".delete", handleDeleteBtnClick);
