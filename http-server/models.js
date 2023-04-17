const { readFile } = require('fs');
const { parseFilterString } = require('./utils');

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

exports.fetchSomeonesPets = (username, cb) => {
    readFile(`${__dirname}/data/pets.json`, 'utf8', (err, res) => {
        err ? console.log(err) : parseFilterString(res, username, cb)
    })
};

exports.fetchSomeonesInterests = (username, cb) => {
    readFile(`${__dirname}/data/interests.json`, 'utf8', (err, res) => {
        err ? console.log(err) : parseFilterString(res, username, cb)
    })
};

exports.fetchFilteredPetsByLivingStatus = (query, cb) => {
    const queryStr = query.split('=');
    const q = queryStr[0];
    let value = queryStr[1];
        if (value === 'true') value = true;
        if (value === 'false') value = false;

    readFile(`${__dirname}/data/pets.json`, 'utf8', (err, res) => {
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

