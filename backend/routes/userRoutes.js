const express = require("express");
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(protect);

router.route("/").get(getUsers);
router.route(":id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
