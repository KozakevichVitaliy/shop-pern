module.exports = (orm, DataTypes) => {
  const Rating = orm.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    rate: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  })

  return Rating
}