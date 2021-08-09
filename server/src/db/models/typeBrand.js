module.exports = (orm, DataTypes) => {
  const TypeBrand = orm.define('type_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  })

  return TypeBrand
}