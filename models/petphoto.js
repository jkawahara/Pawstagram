module.exports = function(sequelize, DataTypes) {
  var photoPost = sequelize.define("photoPost", {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    caption: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  photoPost.associate = function(models) {
    photoPost.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    photoPost.belongsTo(models.Photos, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return photoPost;
};
