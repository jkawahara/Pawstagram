module.exports = function(sequelize, DataTypes) {
  var PhotoPost = sequelize.define("PhotoPost", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  PhotoPost.associate = function(models) {
    PhotoPost.belongsTo(models.PetPhoto, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

  return PhotoPost;
};
