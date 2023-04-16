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