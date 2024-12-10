const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { isValidObjectId } = require("../middleware/utils.js");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.createUsers = async (req, res) => {
  try {
    const {
      parent_id,
      firstName,
      lastName,
      companyName,
      address,
      phoneNumber,
      profile_url,
      username,
      email,
      password,
      role_id,
      status,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      parent_id,
      firstName,
      lastName,
      companyName,
      address,
      phoneNumber,
      profile_url,
      username,
      email,
      password: hashedPassword,
      role_id,
      status,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign(
      { email: savedUser.email, userId: savedUser._id },
      process.env.JWT_SECRET
    );

    res.status(201).json({
      success: true,
      message: "User signed up successfully",
      token,
      user: { id: savedUser._id },
    });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.signInUsers = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { email: user.email, userId: user._id },
      process.env.JWT_SECRET
    );

    res.status(200).json({
      success: true,
      message: "User signed in successfully",
      token,
      userId: user._id,
    });
  } catch (error) {
    console.error("Error signing in user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getUsersId = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!isValidObjectId(userId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid userId",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getParentId = async (req, res) => {
  try {
    const parentId = req.params.parent_id;
    const createUser = await User.find({ parent_id: parentId });
    if (!createUser) {
      return res.status(404).json({ error: "Create User not found" });
    }
    res.status(200).json({ createUser });
  } catch (error) {
    console.error("Error fetching Create User:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updates = req.body;

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "User ID is required." });
    }

    let user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    for (let key in updates) {
      if (key === "password") {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(updates[key], salt);
        user[key] = hashedPassword;
      } else {
        user[key] = updates[key];
      }
    }

    user = await user.save();

    res
      .status(200)
      .json({ success: true, message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Please provide both current and new passwords.",
      });
    }

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Current password is incorrect." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Password changed successfully." });
  } catch (error) {
    console.error("Error changing password:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const token = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await user.save();

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Password Reset",
      text: `You requested for a password reset. Click the link below to reset your password:
      http://localhost:3000/auth/newpassword/${token}
      If you did not request this, please ignore this email.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res
          .status(500)
          .json({ success: false, message: "Error sending email." });
      } else {
        res.status(200).json({
          success: true,
          message: "Password reset email sent successfully.",
        });
      }
    });
  } catch (error) {
    console.error("Error processing forgot password request:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Password reset token is invalid or has expired.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password has been reset successfully.",
    });
  } catch (error) {
    console.error("Error in resetting password:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
};
