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

var community = window.location.pathname.split("/").pop();
console.log(community);
$("#join-community").on("click", function() {
  if (confirm("Are you sure you want to join this community?")) {
    $.get("/api/addcommunity/" + community, function(data) {
      console.log(data);
    }).then(function() {
      alert("community joined!");
      location.reload();
    });
  }
});

var user;
// gets whatever community id the user is at via their local browser window url

$.get("/api/thisuser", function(data) {
  user = data.name;
});

$("#send-message").on("click", function(e) {
  e.preventDefault();
  var message = {
    text: $("#form10")
      .val()
      .trim(),
    user: user,
    createdAt: moment().format("MM DD YYYY, HH:mm:ss")
  };
  if (!user) {
    alert("you must be logged in to post a message");
  } else {
    database.ref(community).push(message);
  }
});

//append new post to message board and clear the text box
database.ref(community).on("child_added", function(snap) {
  var text = $("<div>")
    .attr("class", "col-lg-7 text-left")
    .append(snap.val().text);
  var timestamp = moment().diff(moment(snap.val().createdAt), "hours");
  var user = $("<div>")
    .attr("class", "col-lg-4 text-right ml-auto")
    .append(snap.val().user);
  var timesince = $("<small>")
    .attr("class", "text-right")
    .append(" ", timestamp + " hours ago");
  var postInfo = user.append(timesince);
  var post = $("<li>")
    .attr("class", "list-group-item border rounded mt-3")
    .append(text, postInfo);
  $("#message-container").prepend(post);
  $("#form10").val("");
});
