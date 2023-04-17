const { readFile } = require('fs');
const { parseFilterString, splitQuery } = require('./utils');

exports.fetchNorthcoders = (cb) => {
    readFile(`${__dirname}/data/northcoders.json`, 
        'utf8', (err, res) => {
            err ? console.log(err) : cb(res);
    })
};

exports.fetchIndividual = (username, cb) => {
    this.fetchNorthcoders((list) => {
        const arrayExtract = list.slice(20, -3)
        parseFilterString(arrayExtract, username, cb)
    })
};

exports.fetchSomeonesInterests = (username, cb) => {
    readFile(`${__dirname}/data/interests.json`, 'utf8', (err, res) => {
        err ? console.log(err) : parseFilterString(res, username, cb)
    })
};

exports.fetchPets = (cb) => {
    readFile(`${__dirname}/data/pets.json`, 
        'utf8', (err, res) => {
            err ? console.log(err) : cb(res);
    })
};

exports.fetchSomeonesPets = (username, cb) => {
    this.fetchPets((res) => {
        parseFilterString(res, username, cb)
    })
};

exports.fetchPetsByQuery = (query, cb) => {
    const {q, value} = splitQuery(query)
    
    this.fetchPets((res) => {
        const parsedArr = JSON.parse(res);
        const results = [];

        for (let person of parsedArr) {
            const holdingObj = {
                username: person.username,
                pets: []
            };
            person.pets.forEach((pet) => {
                if (pet[q] === value) {
                    holdingObj.pets.push(pet)
                }
            });
            if (holdingObj.pets.length) {
                results.push(holdingObj)
            };
        };
        cb(JSON.stringify(results));
    })
};

