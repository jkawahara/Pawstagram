module.exports = function(sequelize, DataTypes) {
  var Community = sequelize.define("Community", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Community.associate = function(models) {
    Community.belongsToMany(models.User, {
      through: "UserCommunity",
      as: "Communities",
      foreignKey: "communityId",
      otherKey: "userId"
    });
  };
  return Community;
};
