const sequelize = require("../config/connection")

const { User, Theme } = require("../models")

const themes = [
    {
        name: "Masonry",
        styleSheet: '<link rel="stylesheet" href="style.css">'
    },
    {
        name: "Dark_Masonry",
        styleSheet: ''
    },
    {
        name: "Sunset",
        styleSheet: ''
    },
    {
        name: "Beach",
        styleSheet: ''
    },
    {
        name: "Forest",
        styleSheet: ''
    },
    {
        name: "Dusk",
        styleSheet: ''
    },
    {
        name: "Techno",
        styleSheet: ''
    },
    {
        name: "Red_Alert",
        styleSheet: ''
    },
    {
        name: "Egg_Hunt",
        styleSheet: ''
    },
    {
        name: "UW",
        styleSheet: ''
    },
    {
        name: "Monochrome",
        styleSheet: ''
    },
    {
        name: "Autumn",
        styleSheet: ''
    },
]

const users = [
    {
        name: "Andrew",
        email: "anoor@noor.com",
        password: "password",
        theme_id: "1"
    },
]



const feedMeSeedmor = async () => {
    try {
        await sequelize.sync({ force: true })
        await Theme.bulkCreate(themes);
        await User.bulkCreate(users, {
            individualHooks: true
        }
        );
        process.exit(0);

    } catch (err) {
        console.log(err)
    }
}

feedMeSeedmor();