const sequelize = require('../config/connection');
const lostData = require('./petLost.json');
const foundData = require('./petFound.json');
const { Lost, Found } = require('../models')



const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  console.log(lostData)
  console.log(foundData)

  await Lost.bulkCreate(lostData);
  // console.log('\n----- LOST SEEDED -----\n');

  // await Found.bulkCreate(foundData);
  // console.log('\n----- FOUND SEEDED -----\n');

  process.exit(0);
};

seedAll();