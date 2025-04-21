import Post from "../model/post.model.js";
import User from "../model/user.model.js";

const createPost = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, userId: req.params.id });
    return res.status(200).json({ message: "Post created", post });
  } catch (error) {
    console.log("Error creating post:", error);
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: User,
    });
    return res.status(200).json({ message: "Get all posts", posts });
  } catch (error) {
    console.log("Error getting all posts:", error);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: User,
    });
    return res.status(200).json({ message: "Get post", post });
  } catch (error) {
    console.log("Error getting post:", error);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(400).json({ message: "post not found" });
    }

    post.update(req.body);

    return res.status(200).json({ message: "Get post", post });
  } catch (error) {
    console.log("Error updating post:", error);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(400).json({ message: "post not found" });
    }

    await post.destroy();

    return res.status(200).json({ message: "post deleted", post });
  } catch (error) {
    console.log("Error deleting post:", error);
  }
};

export { createPost, getAllPost, getPost, updatePost, deletePost };
