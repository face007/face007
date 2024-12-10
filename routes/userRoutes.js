const express = require("express");
const router = express.Router();
const usersController = require("../controller/userController");
const { verifyToken } = require("../middleware/auth");

router.post("/signup", usersController.createUsers);
router.post("/signin", usersController.signInUsers);
router.get("/users", usersController.getUsers);
router.get("/users/:id", usersController.getUsersId);
router.get("/users/create/:parent_id", usersController.getParentId);
router.put("/users/:id", usersController.updateUser);
router.post("/change-password", verifyToken, usersController.changePassword);
router.post('/forgot-password', usersController.forgotPassword);
router.post('/reset-password/:token', usersController.resetPassword);

module.exports = router;
