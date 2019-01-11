INSERT INTO Communities (name)
VALUES ("Dog run"), ("Cat hunt"), ("Bird tweet");

INSERT INTO Users (userPhotoUrl, name, email, password, communities, bio, location)
VALUES ("https://media.gettyimages.com/photos/young-redhead-woman-hug-her-small-mixedbreed-dog-picture-id485251750?s=612x612", "uers1", "user1@user1.com", "user1pwd", "comms1", "user1bio", "user1location"), ("https://www.thesprucepets.com/thmb/ydM-Mds2ed9ZzPKO3NA_PTWdmdE=/3866x2580/filters:no_upscale():max_bytes(150000):strip_icc()/Westend61-GettyImages-560123853-56ad36e43df78cf772b68a9d.jpg", "user2", "user2@user2.com", "user2pwd", "comms2", "user2bio", "user2location"), ("https://image.shutterstock.com/image-photo/asian-woman-selfie-dog-260nw-1066473947.jpg", "user3", "user3@user3.com", "user3pwd", "comms3", "user3bio", "user3location");

INSERT INTO Pets (name, species, breed, size, age, bio, profPic, UserId)
VALUES ("pet1", "pet1species", "pet1breed", "pet1size", 1, "pet1bio", "https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-ih2kijjv-national-veterinary-associates-client/g5-cl-58fzxow1x-mundelein-animal-hospital/uploads/huge-dog.png", 1), ("pet2", "pet2species", "pet2breed", "pet2size", 2, "pet2bio", "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", 2), ("pet3", "pet3species", "pet3breed", "pet3size", 3, "pet3bio", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpS1evdpK4qQvlbpfNaBiq1VaIm3IqDDFZwJlDSnOhcIXKrdWaw", 3);

INSERT INTO PetPhotos (url, likes, caption, comments)
VALUES ("https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-ih2kijjv-national-veterinary-associates-client/g5-cl-58fzxow1x-mundelein-animal-hospital/uploads/huge-dog.png", 5, "petphoto1caption", "petphoto1comments"), ("https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", 100, "petphoto2caption", "petphoto2comments"), ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpS1evdpK4qQvlbpfNaBiq1VaIm3IqDDFZwJlDSnOhcIXKrdWaw", 1234, "petphoto3caption", "petphoto3comments");

INSERT INTO PhotoPosts (title, body)
VALUES ("photopost1title", "photopost1body"), ("photopost2title", "photopost2body"), ("photopost3title", "photopost3body");
