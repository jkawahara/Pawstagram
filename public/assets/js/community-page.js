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

var user
var community = window.location.pathname.split("/").pop()
$.get("/api/users/", 
function(data) {
  console.log(data)
  user = "Bob"
  // need to somehow get username here to put on chat
}).then(function() {
    
  });
  $(".testing").on("click", e=>{
    e.preventDefault();
    var message = {
      text: $("#form10").val().trim(),
      user: user,
      createdAt: moment().format("MM Do YYYY, h:mm:ss")
    };
    database.ref(community).push(message);
  })
  //append new post to message board and clear the text box
  database.ref(community).on("child_added", snap=>{
    var text = $("<div>").attr("class", "col-lg-7 text-left").append(snap.val().text);
    var timeSince = $("<small>").append(snap.val().createdAt);
    var user = $("<div>").attr("class", "col-lg-4 text-right ml-auto").append(snap.val().user, " " ,moment(timeSince).fromNow());
    var post = $("<li>").attr("class", "list-group-item border rounded mt-3").append(text, user);
    $("#message-container").prepend(post);
    $("#form10").val("")  
  })
  