let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

  const {
    CreatTach,
    GetTach,
    GetATach,
    updateTach,
    deleteTach,
  } = require("../controller/tachController");
router.post("/add", CreatTach);
router.get("/get", GetTach);
router.get("/update/:id", GetATach);
router.put("/update/:id", updateTach);
router.delete("/delete/:id", deleteTach);

module.exports = router;
