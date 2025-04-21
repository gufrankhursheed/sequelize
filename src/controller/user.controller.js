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
    const users = await User.findAll();
    return res.status(200).json({ message: "Get all users", users });
  } catch (error) {
    console.log("Error getting all users");
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    return res.status(200).json({ message: "Get user", user });
  } catch (error) {
    console.log("Error getting user");
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
    console.log("Error updating user");
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    await user.destroy()

    return res.status(200).json({ message: "User deleted", user });
  } catch (error) {
    console.log("Error deleting user");
  }
};

export { createUser, getAllUser, getUser, updateUser, deleteUser };
