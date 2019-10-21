/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_info', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'tb_info'
  });
};
