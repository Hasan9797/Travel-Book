const router = require("express").Router();
const Travel = require("../models/Travel");

router.get("/", async (req, res) => {
  try {
    const travels = await Travel.find();

    res.status(200).json({
      message: "Travels fetched successfully",
      travels,
    });
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!travel) {
      return res.status(404).json({
        message: "Travel not found",
      });
    }

    res.status(200).json({
      message: "successfully",
      travel,
    });
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title, descr, image } = req.body;

    const travel = await Travel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      descr,
    });
    await travel.save();

    res.status(200).json({
      message: "successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/add", async (req, res) => {
  const { title, descr, image } = req.body;
  const newTravel = new Travel({
    title,
    image,
    descr,
  });
  await newTravel.save();
  res.status(201).json({
    message: "Travel added successfully",
  });
});

router.delete("/:id", async (req, res) => {
  await Travel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "Travel deleted successfully",
  });
});

module.exports = router;
