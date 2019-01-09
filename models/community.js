module.exports = function(sequelize, DataTypes) {
  var Community = sequelize.define("Community", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    posts: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  // Community.associate = function(models) {
  //   Community.hasMany(models.User, {
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   });
  //   Community.belongsToMany(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Community;
};
