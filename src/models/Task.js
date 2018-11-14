module.exports = function(sequelize, DataTypes) {
  const Task = sequelize.define('Task', {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.TEXT, allowNulL: false },
    isCompleted: { type: DataTypes.BOOLEAN, field: 'is_completed' },
    createdAt: { type: DataTypes.DATE, allowNull: false, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' }
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Task;
};
