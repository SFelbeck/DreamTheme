const User = require('./User');
const Theme = require('./Theme');

Theme.hasMany(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.belongsTo(Theme, {
    foreignKey: 'theme_id'
});

module.exports = { User, Theme };