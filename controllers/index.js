const express = require('express');
const router = express.Router();
const apiRoutes = require('./api')
const {User,Theme} = require('../models');


router.use("/api", apiRoutes);

router.get("/",(req,res)=>{
    if(!req.session.user) {
        return res.redirect("/login")
    }
    console.log(req.session)
    Theme.findAll({
        include: [User]
    }).then(themes=>{
        if (req.session.user) {
            User.findByPk(req.session.user.user_id, {include: [Theme]}).then (userData => {
                const hbsThemes = themes.map(theme=>theme.get({plain:true}))
                console.log("==========")
                console.log(hbsThemes)
                const loggedIn = req.session.user?true:false
                const hbsUserData = userData.get({plain:true})
                res.json(hbsUserData)
                res.render("home",{themes:hbsThemes,loggedIn,name:req.session.user?.name,theme:userData.theme.styleSheet})

            })
        }
    })
})

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/")
    }
    res.render("login")
})

module.exports = router;