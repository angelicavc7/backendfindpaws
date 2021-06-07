const express = require("express");
const router = express.Router();
const { Lost } = require("../../models");
//gets all forms

router.get("/", (req, res) => {
  Lost.findAll()
    .then((LostPets) => {
      res.json(LostPets);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error", err });
    });
});
//finds one form by its specific id
router.get("/:id", (req, res) => {
  Lost.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((LostPet) => {
      res.json(LostPet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error", err });
    });
});
//creates a new form for user
router.post("/", (req, res) => {
  console.log(req.body)
  Lost.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    petName: req.body.petName,
    petType: req.body.petType,
    petDescription: req.body.petDescription,
    lastSeen: req.body.lastSeen,
    dateLost: req.body.dateLost,
    reward: req.body.reward,
  })
    .then((LostPet) => {
      res.json(LostPet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error", err });
    });
});
module.exports = router;
