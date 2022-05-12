const sequelize = require("../config/connection")

const { User, Theme } = require("../models")

const themes = [
    {
        name: "Masonry",
        styleSheet: "Masonry.css"
    },
    {
        name: "Dark_Masonry",
        styleSheet: 'Dark_Masonry.css'
    },
    {
        name: "Sunset",
        styleSheet: 'Sunset.css'
    },
    {
        name: "Beach",
        styleSheet: 'Beach.css'
    },
    {
        name: "Forest",
        styleSheet: 'Forest.css'
    },
    {
        name: "Dusk",
        styleSheet: 'Dusk.css'
    },
    {
        name: "Techno",
        styleSheet: 'Techno.css'
    },
    {
        name: "Red_Alert",
        styleSheet: 'Red_Alert.css'
    },
    {
        name: "Egg_Hunt",
        styleSheet: 'Egg_Hunt.css'
    },
    {
        name: "UW",
        styleSheet: 'UW.css'
    },
    {
        name: "Monochrome",
        styleSheet: 'Monochrome.css'
    },
    {
        name: "Autumn",
        styleSheet: 'Autumn.css'
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