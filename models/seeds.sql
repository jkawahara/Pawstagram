USE pawstagram_db;

INSERT INTO Communities (name, posts, bio, location, photoUrl)
VALUES ("comm1", "comm1post", "comm1bio", "comm1location", "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Cesars-dog-park-tips.jpg?itok=hkJ79Dog"), ("comm2", "comm2post", "comm2bio", "comm2location", "https://www.tripsavvy.com/thmb/Kq9SBqeJ6RPQvkyo3WTBnMtMv3I=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/IMG_9157-1000x1500-56a387c93df78cf7727ddf1b.jpg"), ("comm3", "comm3post", "comm3bio", "comm3location", "https://cairngorms.co.uk/wp-content/uploads/2017/07/A-father-and-son-cycling-a-country-path-Ballater.-The-Cairngorms-National-Park1.jpg");

INSERT INTO Users (userPhotoUrl, name, email, password, communities, bio, location)
VALUES ("https://media.gettyimages.com/photos/young-redhead-woman-hug-her-small-mixedbreed-dog-picture-id485251750?s=612x612", "user1", "user1@user1.com", "$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO", '["comm1","comm2"]', "user1bio", "user1location"), ("https://www.thesprucepets.com/thmb/ydM-Mds2ed9ZzPKO3NA_PTWdmdE=/3866x2580/filters:no_upscale():max_bytes(150000):strip_icc()/Westend61-GettyImages-560123853-56ad36e43df78cf772b68a9d.jpg", "user2", "user2@user2.com", "$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO", "comm2", "user2bio", "user2location"), ("https://image.shutterstock.com/image-photo/asian-woman-selfie-dog-260nw-1066473947.jpg", "user3", "user3@user3.com", "$2a$10$QnStSdLFZBIo3WvQf8.iT.tim9Kf3d69zSDHSSK7rfAZK3UjLgNxO", "comm3", "user3bio", "user3location");

INSERT INTO UserCommunity (communityId, userId)
VALUES (1, 1), (1, 2), (2, 2), (3, 3);

INSERT INTO Pets (name, species, breed, size, age, bio, profPic, UserId)
VALUES ("pet1", "pet1species", "pet1breed", "pet1size", 1, "pet1bio", "https://www.bowwow.com.au/images/fb-pets.png", 1), ("pet2", "pet2species", "pet2breed", "pet2size", 2, "pet2bio", "http://libvetclinic.com/wp-content/uploads/2015/06/sadpuppy.png", 2), ("pet3", "pet3species", "pet3breed", "pet3size", 3, "pet3bio", "https://www.animaltransport.com.au/thumbnaillarge/pets.png", 3);

INSERT INTO PetPhotos (url, likes, caption, comments, PetId)
VALUES ("https://www.bowwow.com.au/images/fb-pets.png", 5, "petphoto1caption", "petphoto1comments", 1), ("https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2015/04/14004202/Golden-Retriever-Five-Puppies1.jpg", 10, "petphoto1caption", "petphoto1comments", 1), ("https://www.wttr.com/wp-content/uploads/2018/05/pet-walking.jpg", 50, "petphoto2caption", "petphoto2comments", 2), ("http://libvetclinic.com/wp-content/uploads/2015/06/sadpuppy.png", 100, "petphoto2caption", "petphoto2comments", 2), ("https://www.animaltransport.com.au/thumbnaillarge/pets.png", 1234, "petphoto3caption", "petphoto3comments", 3), ("https://www.scarsdalevets.com/wp-content/uploads/2015/02/PicsPetsCatAndDogVA.png", 12314, "petphoto3caption", "petphoto3comments", 3);

INSERT INTO PhotoPosts (title, body, PetPhotoId)
VALUES ("photopost1title", "photopost1body", 1), ("photopost2title", "photopost2body", 2), ("photopost3title", "photopost3body", 3);