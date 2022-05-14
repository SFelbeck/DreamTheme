const User = require('./User');
const Theme = require('./Theme');

Theme.hasMany(User, {
    foreignKey: 'theme_id'
});

User.belongsTo(Theme, {
    foreignKey: 'theme_id'
});

module.exports = { User, Theme };