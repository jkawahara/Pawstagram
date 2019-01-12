USE petstagram_db;

INSERT INTO Communities (name)
VALUES ("comm1"), ("comm2"), ("comm3");

INSERT INTO Users (userPhotoUrl, name, email, password, communities, bio, location)
VALUES ("https://media.gettyimages.com/photos/young-redhead-woman-hug-her-small-mixedbreed-dog-picture-id485251750?s=612x612", "uers1", "user1@user1.com", "user1pwd", '["comm1","comm2"]', "user1bio", "user1location"), ("https://www.thesprucepets.com/thmb/ydM-Mds2ed9ZzPKO3NA_PTWdmdE=/3866x2580/filters:no_upscale():max_bytes(150000):strip_icc()/Westend61-GettyImages-560123853-56ad36e43df78cf772b68a9d.jpg", "user2", "user2@user2.com", "user2pwd", "comm2", "user2bio", "user2location"), ("https://image.shutterstock.com/image-photo/asian-woman-selfie-dog-260nw-1066473947.jpg", "user3", "user3@user3.com", "user3pwd", "comm3", "user3bio", "user3location");

INSERT INTO UserCommunity (communityId, userId)
VALUES (1, 1), (1, 2), (2, 2), (3, 3);

INSERT INTO Pets (name, species, breed, size, age, bio, profPic, UserId)
VALUES ("pet1", "pet1species", "pet1breed", "pet1size", 1, "pet1bio", "https://www.bowwow.com.au/images/fb-pets.png", 1), ("pet2", "pet2species", "pet2breed", "pet2size", 2, "pet2bio", "http://libvetclinic.com/wp-content/uploads/2015/06/sadpuppy.png", 2), ("pet3", "pet3species", "pet3breed", "pet3size", 3, "pet3bio", "https://www.animaltransport.com.au/thumbnaillarge/pets.png,", 3);

INSERT INTO PetPhotos (url, likes, caption, comments, PetId)
VALUES ('["https://www.bowwow.com.au/images/fb-pets.png","https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2015/04/14004202/Golden-Retriever-Five-Puppies1.jpg"]', 5, "petphoto1caption", "petphoto1comments", 1), ('["http://libvetclinic.com/wp-content/uploads/2015/06/sadpuppy.png","https://www.wttr.com/wp-content/uploads/2018/05/pet-walking.jpg"]', 100, "petphoto2caption", "petphoto2comments", 2), ('["https://www.animaltransport.com.au/thumbnaillarge/pets.png,https://www.scarsdalevets.com/wp-content/uploads/2015/02/PicsPetsCatAndDogVA.png"]', 1234, "petphoto3caption", "petphoto3comments", 3);

INSERT INTO PhotoPosts (title, body, PetPhotoId)
VALUES ("photopost1title", "photopost1body", 1), ("photopost2title", "photopost2body", 2), ("photopost3title", "photopost3body", 3);
