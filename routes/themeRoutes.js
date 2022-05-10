const express = require("express");
const router = express.Router();
const {Theme, User} = require("../models/");

router.get("/", (req, res) => {
//   if(!req.session.user){
//     return res.status(401).json({msg:"ya gotta login to create a blog post!"})
// }
    Theme.findAll({}).then(dbThemes => {
        res.json(dbThemes);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err});
    });
});

router.get("/:id", (req, res) => {
//   if(!req.session.user){
//     return res.status(401).json({msg:"ya gotta login to create a blog post!"})
// }
    Theme.findByPk(req.params.id,{})
      .then(dbTheme => {
        res.json(dbTheme);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

module.exports = router;