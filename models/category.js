module.exports = function (sequelize, DataTypes) {
    var List = sequelize.define("Category", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
          }
    },{ tableName: 'categories' });

  
    return List;
};
