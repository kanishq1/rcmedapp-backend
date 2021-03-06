module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define(
    "profile",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      name: { type: DataTypes.TEXT },
      age: { type: DataTypes.INTEGER },
      sex: { type: DataTypes.TEXT },
      isMaster: { type: DataTypes.BOOLEAN, defaultValue: false },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      underscored: true,
    }
  );

  return profile;
};
