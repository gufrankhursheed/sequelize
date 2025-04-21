import Post from "../model/post.model.js";
import User from "../model/user.model.js";

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).json({ message: "User created", user });
  } catch (error) {
    console.log("Error creating user:", error);
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll({
      include: Post,
    })
    return res.status(200).json({ message: "Get all users", users });
  } catch (error) {
    console.log("Error getting all users:", error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
        include: Post,
    })
    return res.status(200).json({ message: "Get user", user });
  } catch (error) {
    console.log("Error getting user:", error);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    user.update(req.body);

    return res.status(200).json({ message: "Get user", user });
  } catch (error) {
    console.log("Error updating user:", error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    await user.destroy();

    return res.status(200).json({ message: "User deleted", user });
  } catch (error) {
    console.log("Error deleting user:", error);
  }
};

export { createUser, getAllUser, getUser, updateUser, deleteUser };
