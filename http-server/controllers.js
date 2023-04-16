const { fetchNorthcoders, fetchIndividual } = require("./models");

exports.getNorthcoders = (req, res) => {
    fetchNorthcoders((jsonData) => {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.write(jsonData)
        res.end();
    })
};

exports.getIndividual = (req, res) => {};
