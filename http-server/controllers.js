const { fetchNorthcoders, fetchIndividual, fetchSomeonesPets, fetchSomeonesInterests, fetchFilteredPets } = require("./models");
const { formatResponse, getEndpoint } = require("./utils");

exports.getNorthcoders = (req, res) => {
    fetchNorthcoders((jsonData) => formatResponse(res, jsonData))
};

exports.getIndividual = (req, res) => {
    fetchIndividual((getEndpoint(req.url, 17)), (jsonData) => {
        formatResponse(res, jsonData)
    })
};

exports.getSomeonesPets = (req, res) => {
    fetchSomeonesPets((getEndpoint(req.url, 10)), (jsonData) => {
        formatResponse(res, jsonData)
    })
};

exports.getSomeonesInterests = (req, res) => {
    fetchSomeonesInterests((getEndpoint(req.url, 15)), (jsonData) => {
        formatResponse(res, jsonData)
    })
};

exports.getFilteredPets = (req, res) => {
    fetchFilteredPets((getEndpoint(req.url, 10)), (jsonData) => {
        formatResponse(res, jsonData)
    });
}