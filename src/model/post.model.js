import { DataTypes } from "sequelize";
import { sequelize } from "../db";

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.TEXT
    }
})

export default Post