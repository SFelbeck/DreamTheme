const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users", userRoutes)

const themeRoutes = require("./themeRoutes");
router.use("/api/themes", themeRoutes)

const frontEnd = require("./frontEndRoutes");
router.use("/", frontEnd)

router.get("/showsessions", (req,res) => {
    res.json(req.session)
})

router.get("/checklogin", (req,res) => {
    if(!req.session.user){
        return res.status(401).json({msg:"please login first"})
    }
    res.json({msg: `You are now logged in ${req.session.user.username}`})
})
module.exports = router;