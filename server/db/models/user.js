module.exports = (orm, DataTypes) => {
  const User = orm.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: 'USER', allowNull: false },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  })

  return User
}