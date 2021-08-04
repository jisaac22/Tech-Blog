const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
      },
      comment: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      blog_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'blog',
            key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment'
    } 
);

module.exports = Comment;