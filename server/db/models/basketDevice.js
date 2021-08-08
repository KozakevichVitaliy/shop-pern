module.exports = (orm, DataTypes) => {
  const BasketDevice = orm.define('basket_device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  })

  return BasketDevice
}