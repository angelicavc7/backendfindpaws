const router = require("express").router();
const Lost = require("../../models/Lost");

router.post("/", async (req, res) => {
  try {
    const lostData = await Lost.create(req.body);
    res.status(200).json(lostData);
  } catch (err) {
    restore.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatePet = await Form.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatePet) {
      res.status(400).json({ message: "No such pet" });
      return;
    }
    res.status(200).json(updatePet);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const lostData = await Lost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!lostData) {
      res.status(404).json({ message: "No item found with that id!" });
      return;
    }
    res.status(200).json(lostData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
