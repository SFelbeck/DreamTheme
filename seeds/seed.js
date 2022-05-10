const sequelize = require("../config/connection")

const { User, Theme } = require("../models")

const themes = [
    {
        name: "Dark",
        styleSheet: "This is all the style sheet text"
    }
]

const users = [
    {
        name: "Andrew",
        email: "anoor@noor.com",
        password: "password",
        theme_id: "1"
    }
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