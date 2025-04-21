import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sequelize", "root", "Cristianogufi@123", {
  host: "localhost",
  port: 3306,
  dialect: 'mysql',
});

const connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export default connectDB