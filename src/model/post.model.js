import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js";

const Post = sequelize.define(
  "Post",
  {
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

export default Post;
