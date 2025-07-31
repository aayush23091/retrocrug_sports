import { Sequelize, Op } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER,
  process.env.DB_PASSWORD, // Database user
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',// other example mysql,oracle,h2
  }
);

export const db = async () => {
  try {
    await sequelize.authenticate();
    console.log("database connected successfully")
    
    await sequelize.sync({alter:true})
    console.log("database connected successfully")

  } catch (e) {
    console.error("fail to connect database successfully",e)
  }
}

// Export the Op object for use in queries
export { Op };



