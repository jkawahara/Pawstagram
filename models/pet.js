module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      breed: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      size: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true
        }
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      profPic: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true
        }
      }
    });
  
    Pet.associate = function(models) {
      // Associating User with Posts
      // When an User is deleted, also delete any associated Posts
      Pet.hasMany(models.Post, {
        onDelete: "cascade"
      }, models.Photo,
      {
        onDelete: "cascade"
      });
      Pet.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Pet;
  };
  