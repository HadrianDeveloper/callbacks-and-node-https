const {readFile} = require('fs');

exports.fetchNorthcoders = (cb) => {
    readFile(`${__dirname}/data/northcoders.json`, 
        'utf8', (err, res) => {
            err ? console.log(err) : cb(res);
    })
};

exports.fetchIndividual = (cb) => {};