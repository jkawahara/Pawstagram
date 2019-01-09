module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userPhotoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    communities: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });
  User.associate = function(models) {
    User.belongsToMany(models.Community, { through: "UserCommunity" });
    User.hasMany(models.PhotoPost, {
      onDelete: "cascade"
    });
  };
  return User;
};
