const express = require("express");
const router = express.Router();
const Post = require("../models/posts");

//Gets all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json(error);
  }
});

//Createing post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json(error);
  }
});

//Specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

//Delete post
router.delete("/:postId", async (req, res) => {
  try {
    const post = await Post.remove({
      _id: req.params.postId,
    });
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

//Update post
router.patch("/:postId", async (req, res) => {
  try {
    const post = await Post.updateOne(
      {
        _id: req.params.postId,
      },
      {
        $set: {
          title: req.body.title,
        },
      }
    );
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
