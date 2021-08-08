module.exports = (orm, DataTypes) => {
  const Brand = orm.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  })

  return Brand
}