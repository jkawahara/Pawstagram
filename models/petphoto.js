module.exports = function(sequelize, DataTypes) {
  var PetPhoto = sequelize.define("PetPhoto", {
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
      type: DataTypes.STRING,
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

  PetPhoto.associate = function(models) {
    PetPhoto.belongsTo(models.Pet, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return PetPhoto;
};
