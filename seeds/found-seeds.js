const { Found } = require('../models');

const FoundData = [
    {
        firstName: "Noel",
        lastName: "Villar",
        phoneNumber: 2062565545,
        email: "noelfake@gmail.com",
        petName: "jimmy",
        petType: "dog",
        petDescription: "big, brown, germen shepard",
        circumstances: "dead",
        dateFound: "06-25-2021",
        lastSeen: "06-25-2021"   
    },
    {
        firstName: "Noel",
        lastName: "Villar",
        phoneNumber: 2062565545,
        email: "noelfake@gmail.com",
        petName: "jimmy",
        petType: "dog",
        petDescription: "big, brown, germen shepard",
        circumstances: "dead",
        dateFound: "06-25-2021",
        lastSeen: "06-25-2021"    
    },
    {
        firstName: "Noel",
        lastName: "Villar",
        phoneNumber: 2062565545,
        email: "noelfake@gmail.com",
        petName: "jimmy",
        petType: "dog",
        petDescription: "big, brown, germen shepard",
        circumstances: "dead",
        dateFound: "06-25-2021",
        lastSeen: "06-25-2021"  
    },
    {
        firstName: "Noel",
        lastName: "Villar",
        phoneNumber: 2062565545,
        email: "noelfake@gmail.com",
        petName: "jimmy",
        petType: "dog",
        petDescription: "big, brown, germen shepard",
        circumstances: "dead",
        dateFound: "06-25-2021",
        lastSeen: "06-25-2021"  
    },
    {
        firstName: "Noel",
        lastName: "Villar",
        phoneNumber: 2062565545,
        email: "noelfake@gmail.com",
        petName: "jimmy",
        petType: "dog",
        petDescription: "big, brown, germen shepard",
        circumstances: "dead",
        dateFound: "06-25-2021",
        lastSeen: "06-25-2021"  
    }
]

const seedFound = () => Found.bulkCreate(FoundData);

module.exports = seedFound;