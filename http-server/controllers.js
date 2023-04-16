const { fetchNorthcoders, fetchIndividual, fetchSomeonesPets, fetchSomeonesInterests } = require("./models");


exports.getNorthcoders = (req, res) => {
    fetchNorthcoders((jsonData) => {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.write(jsonData)
        res.end();
    })
};

exports.getIndividual = (req, res) => {
    let {url} = req;
        url = url.substring(17)
    fetchIndividual((url), (jsonData) => {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.write(jsonData);
        res.end();
    })
};

exports.getSomeonesPets = (req, res) => {
    let {url} = req;
        url = url.substring(10)
    fetchSomeonesPets((url), (jsonData) => {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.write(jsonData);
        res.end();
    })
};

exports.getSomeonesInterests = (req, res) => {
    let {url} = req;
        url = url.substring(15);
    fetchSomeonesInterests((url), (jsonData) => {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.write(jsonData);
        res.end()
    })
};