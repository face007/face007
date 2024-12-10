const express = require("express");
const router = express.Router();
const blogController = require("../../controller/blog/blogController");

router.post("/blog", blogController.createBlog);
router.get("/blog", blogController.getAllBlogs);
router.get("/blog/:id", blogController.getBlogById);
router.put("/blog/:id", blogController.updateBlog);
router.delete("/blog/:id", blogController.deleteBlog);

module.exports = router;
