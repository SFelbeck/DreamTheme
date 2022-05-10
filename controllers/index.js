const express = require('express');
const router = express.Router();
const apiRoutes = require('./api')
const {User,Theme} = require('../models');


router.use("/api", apiRoutes);

router.get("/",(req,res)=>{
    Theme.findAll({
        include: [User]
    }).then(themes=>{
        console.log(themes)
        const hbsThemes = themes.map(theme=>theme.get({plain:true}))
        console.log("==========")
        console.log(hbsThemes)
        const loggedIn = req.session.user?true:false
        res.render("home",{themes:hbsThemes,loggedIn,username:req.session.user?.username})
    })
})

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/profile")
    }
    res.render("login")
})

router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user.id,{
        include:[Theme]
    }).then(userData=>{
        console.log(userData);
        const hbsData = userData.get({plain:true})
        console.log("=======")
        console.log(hbsData);
        hbsData.loggedIn = req.session.user?true:false
        res.render("profile",hbsData)
    })
})

module.exports = router;