const { Lost } = require('../models');

const LostData = [
    {
        firstName: "milk",
        lastName: "dairy",
        phoneNumber: 2,
        email: "gallon",
        petName: "Noel",
        petType: "dog",
        petDescription: "string",
        lastSeen: "location",
        dateLost: "06-25-2021",
        reward: 22,    
    },
    {
        firstName: "milk",
        lastName: "dairy",
        phoneNumber: 2,
        email: "gallon",
        petName: "Noel",
        petType: "dog",
        petDescription: "string",
        lastSeen: "location",
        dateLost: "06-25-2021",
        reward: 22,
    },
    {
        firstName: "milk",
        lastName: "dairy",
        phoneNumber: 2,
        email: "gallon",
        petName: "Noel",
        petType: "dog",
        petDescription: "string",
        lastSeen: "location",
        dateLost: "06-25-2021",
        reward: 22,
    },
    {
        firstName: "milk",
        lastName: "dairy",
        phoneNumber: 2,
        email: "gallon",
        petName: "Noel",
        petType: "dog",
        petDescription: "string",
        lastSeen: "location",
        dateLost: "06-25-2021",
        reward: 22,
    },
    {
        firstName: "milk",
        lastName: "dairy",
        phoneNumber: 2,
        email: "gallon",
        petName: "Noel",
        petType: "dog",
        petDescription: "string",
        lastSeen: "location",
        dateLost: "06-25-2021",
        reward: 22,
    }
]

const seedLost = () => Lost.bulkCreate(LostData);

module.exports = seedLost;