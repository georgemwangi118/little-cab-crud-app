const express = require("express");
const {
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  authUser,
} = require("../controllers/userControllers");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
