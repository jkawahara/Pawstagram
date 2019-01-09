module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userPhotoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "https://i1.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg?w=300&ssl=1",
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
      allowNull: true
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
