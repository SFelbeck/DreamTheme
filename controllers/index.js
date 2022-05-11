const express = require('express');
const router = express.Router();
const apiRoutes = require('./api')
const {User,Theme} = require('../models');


router.use("/api", apiRoutes);

router.get("/",(req,res)=>{
    console.log(req.session)
    Theme.findAll({
        include: [User]
    }).then(themes=>{
        const hbsThemes = themes.map(theme=>theme.get({plain:true}))
        console.log("==========")
        console.log(hbsThemes)
        const loggedIn = req.session.user?true:false
        res.render("home",{themes:hbsThemes,loggedIn,name:req.session.user?.name})
    })
})

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/")
    }
    res.render("login")
})

module.exports = router;