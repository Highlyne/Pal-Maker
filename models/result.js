// Creating the Results model
module.exports = function(sequelize, DataTypes) {
  var Result = sequelize.define("Result", {
    // Storing user photo and results
    
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    greeting: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    // User's answer to each question
    ans1: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    ans2: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    ans3: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    ans4: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    ans5: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    match: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  Result.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Result.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    }
    );
  }
  return Result;
};
