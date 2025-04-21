import Post from "./src/model/post.model.js";
import User from "./src/model/user.model.js";

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });