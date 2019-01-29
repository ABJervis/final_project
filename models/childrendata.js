module.exports = function(sequelize, DataTypes) {
    var Kid = sequelize.define("Kid", {
      name: DataTypes.STRING,
      dob: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      heightIN: DataTypes.INTEGER,
    });
    return Kid;
  };
  