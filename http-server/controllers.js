const { fetchNorthcoders, fetchIndividual, fetchSomeonesPets, fetchSomeonesInterests, fetchPetsByQuery } = require("./models");
const { formatResponse, getEndpoint } = require("./utils");

exports.handle404 = (res, invalid) => {
    const errMsg = {msg: `Error! ${invalid} not found.`}
    formatResponse(res, JSON.stringify(errMsg), 404)
}

exports.getNorthcoders = (req, res) => {
    fetchNorthcoders((jsonData) => formatResponse(res, jsonData))
};

exports.getIndividual = (req, res) => {
    fetchIndividual((getEndpoint(req.url, 17)), (jsonData) => {
        jsonData.length < 5 ? 
            this.handle404(res, 'Username') : formatResponse(res, jsonData) 
    });
};

exports.getSomeonesPets = (req, res) => {
    fetchSomeonesPets((getEndpoint(req.url, 10)), (jsonData) => {
        jsonData.length < 5 ? 
            this.handle404(res, 'Username') : formatResponse(res, jsonData) 
    });
};

exports.getSomeonesInterests = (req, res) => {
    fetchSomeonesInterests((getEndpoint(req.url, 15)), (jsonData) => {
        jsonData.length < 5 ? 
            this.handle404(res, 'Username') : formatResponse(res, jsonData) 
    })
};

exports.getPetsByQuery = (req, res) => {
    fetchPetsByQuery((getEndpoint(req.url, 10)), (jsonData) => {
        jsonData.length < 5 ? 
            this.handle404(res, 'Pet type') : formatResponse(res, jsonData) 
    });
};
