module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'user',
    {
      email: {
        type: Sequelize.STRING(30),
        // unique: true,
      },
      password: {
        type: Sequelize.STRING(100),
      },
      name: {
        type: Sequelize.STRING(30),
      },
      provider: {
        type: Sequelize.STRING(30),
      },
    },
    {
      tableName: 'user',
      underscored: true,
    }
  );

  User.associate = db => {
    db.User.hasMany(db.Post);
  };

  return User;
};