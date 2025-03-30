'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notifications.init({
    subject: {type:DataTypes.STRING,allowNull:false},
    content: {type:DataTypes.STRING,allowNull:false},
    recepientEmail:{type:DataTypes.STRING,allowNull:false},
    status: {
      type:DataTypes.ENUM,
      allowNull:false,
      values : ['Pending','Succesed','Failed'],
      defaultValue:'Pending'
    },
    notificationTime:{type: DataTypes.DATE,allowNull:false}
  }, {
    sequelize,
    modelName: 'Notifications',
  });
  return Notifications;
};