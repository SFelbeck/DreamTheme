const sequelize = require("../config/connection")

const {User, Theme} = require("../models")

const users = [

]

const themes = [

]

// const seedFeed = async () => {
//     try{
//         await sequelize.sync({force:true})
//         await User.bulkCreate(users,{
//             individualHooks:true
//         });
//     }
// }