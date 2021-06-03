const seedSearch = require('./search-seeds');
const seedLost = require('./lost-seeds');
const seedFound = require('./found-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedSearch();
  console.log('\n----- SEARCH SEEDED -----\n');

  await seedLost();
  console.log('\n----- LOST SEEDED -----\n');

  await seedFound();
  console.log('\n----- FOUND SEEDED -----\n');

  process.exit(0);
};

seedAll();