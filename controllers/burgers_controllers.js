let express = require("express");
let router = express.Router();
let db = require("../models");

router.get("/", function (req, res) {
  db.Burger.findAll({})
    .then(function (result) {
      let burgerObject = {
        burgers: result
      };
      res.render("index", burgerObject);
    });
});

router.put("/:id", function (req, res) {
  let id = req.params.id;
  db.Burger.update({
    devoured: true,
    customer_name: req.body.name
  }, {
    where: {
      id: id
    }
  }).then(function (data) {
    res.redirect("/");
  });

});

router.post("/", function (req, res) {
  let burgerName = req.body.name;
  db.Burger.create({
    burger_name: burgerName,
  }).then(function (data) {
    res.redirect("/");
  });

});

module.exports = router;