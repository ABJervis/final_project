module.exports = function(sequlize, DataTypes) {
    var Kid = sequlize.define("Kid", {
        name: DataTypes.STRING, 
        age: DataTypes.INTEGER,
        heightIN: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,
        allergies: DataTypes.TEXT
    });
    return Kid;
};
    
