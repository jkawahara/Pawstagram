  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB6vWd4deq4rRbay-ThzYAxJp-_dcNz3PY",
    authDomain: "petstagram-ee97f.firebaseapp.com",
    databaseURL: "https://petstagram-ee97f.firebaseio.com",
    projectId: "petstagram-ee97f",
    storageBucket: "petstagram-ee97f.appspot.com",
    messagingSenderId: "646710545726"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
  // database.settings(settings);

// $(document).ready(function() {
//     // This file just does a GET request to figure out which user is logged in
//     // and updates the HTML on the page
//     $.get("/api/comm").then(function(data) {
//       $(".member-name").text(data.email);
//     });
//   });
var user = "test";

// $(document).on("ready", function() {
//   $.get("api/user_data").then(function(data) {
//       user = data.name;
//       console.log(user)
//   });
// })


// function addCommentData(communityId, text, name, time) {
//   firebase.database().ref('communities/' + communityId).set({
//     post: text,
//     name: name,
//     time: time
//   });
// };


//on submit, push message to firebase
$("#postComment").on("click", e=>{
  e.preventDefault();
  console.log(e)
  var message = {
    text: $("#form10").val().trim(),
    user: user
  };
  database.ref().push(message);
});

//append new post to message board and clear the text box
database.ref().on("child_added", snap=>{
  var text = $("<div>").attr("class", "col-lg-7 text-left").append(snap.text);
  var user = $("<div>").attr("class", "col-lg-4 text-right ml-auto").append(snap.user);
  var post = $("<li>").attr("class", "list-group-item border rounded mt-3").append(text, user);
  $("#board").prepend(post);
  $("#form10").val("")  
})

