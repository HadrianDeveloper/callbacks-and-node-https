const { readFile } = require('fs');

exports.fetchNorthcoders = (cb) => {
    readFile(`${__dirname}/data/northcoders.json`, 
        'utf8', (err, res) => {
            err ? console.log(err) : cb(res);
    })
};

exports.fetchIndividual = (username, cb) => {
    this.fetchNorthcoders((list) => {
        const parsedList = JSON.parse(list);
        const individual = parsedList.northcoders
            .filter((u) => u.username === username);
        cb(JSON.stringify(individual))
    })
};

exports.fetchSomeonesPets = (username, cb) => {
    readFile(`${__dirname}/data/pets.json`, 'utf8', (err, res) => {
        if (err) console.log(err);
        else {
            const parsedArray = JSON.parse(res);
            const target = parsedArray.filter((u) => u.username === username);
            cb(JSON.stringify(target))
        }
    })
};

exports.fetchSomeonesInterests = (username, cb) => {
    readFile(`${__dirname}/data/interests.json`, 'utf8', (err, res) => {
        if (err) console.log(err);
        else {
            const parsedArr = JSON.parse(res);
            const target = parsedArr.filter((u) => u.username === username);
            cb(JSON.stringify(target));
        }
    })
}