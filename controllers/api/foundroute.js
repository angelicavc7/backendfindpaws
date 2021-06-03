const router = require("express").router();
const { Found } = require("../models");
//gets all forms for pets
router.get("/", (req, res) => {
  Found.findAll()
    .then((foundPets) => {
      res.json(foundPets);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error", err });
    });
});
//finds one form by its specific id
router.get("/:id", (req, res) => {
  Found.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((foundPet) => {
      res.json(foundPet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error", err });
    });
});
//creates a new form for user
router.post("/", (req, res) => {
  Found.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.user.email,
    petType: req.body.petType,
    petDescription: req.body.petDescription,
    circumstances: req.body.circumstances,
    dateFound: req.body.dateFound,
    lastSeen: req.body.lastSeen,
  })
    .then((foundPet) => {
      res.json(foundPet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error", err });
    });
});
//edits a form
router.put("/:id", (req, res) => {
  Found.findOne({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    Found.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.user.email,
        petType: req.body.petType,
        petDescription: req.body.petDescription,
        circumstances: req.body.circumstances,
        dateFound: req.body.dateFound,
        lastSeen: req.body.lastSeen,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((editFoundPet) => {
        res.json(editFoundPet);
      })
      .catch((err) => {
        res.status(500).json({ message: "error", err });
      });
  });
});
//deletes a form
router.delete("/:id", (req, res) => {
  Found.findOne({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    Found.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((delFoundPet) => {
        res.json(delFoundPet);
      })
      .catch((err) => {
        res.status(500).json({ message: "error", err });
      });
  });
});
module.exports = router;
