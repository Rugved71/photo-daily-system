const express = require("express");
const {
  getAllBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(protect);

router.route("/").get(getAllBookings).post(createBooking);
router.route(":id").get(getBooking).put(updateBooking).delete(deleteBooking);

module.exports = router;
