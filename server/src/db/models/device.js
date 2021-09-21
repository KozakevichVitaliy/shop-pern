module.exports = (orm, DataTypes) => {
  const Device = orm.define('device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }, 
    price: { type: DataTypes.INTEGER, allowNull: false }, 
    rating: { type: DataTypes.INTEGER, defaultValue: 0 }, 
    img: { type: DataTypes.STRING, allowNull: false  }, 
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  })

  return Device
}