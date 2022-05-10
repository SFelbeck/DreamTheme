const User = require('./User');
const Theme = require('./Theme');

Theme.hasMany(User);

User.belongsTo(Theme, {
    foreignKey: 'theme_id'
});

module.exports = { User, Theme };