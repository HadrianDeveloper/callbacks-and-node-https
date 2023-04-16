const { getNorthcoders, getIndividual, getSomeonesPets, getSomeonesInterests } = require('./controllers.js');
const http = require('http');
const { formatResponse } = require('./utils.js');

const server = http.createServer((req, res) => {
    const {method, url} = req;
    if (method === 'GET') {
        if (url === '/api/northcoders') {
            getNorthcoders(req, res);
        } else if (/\/api\/northcoders\/.+/.test(url)) {
            getIndividual(req, res)
        } else  if (/\/api\/pets\/.+/.test(url)) {
            getSomeonesPets(req, res)
        } else if (/\/api\/interests\/.+/.test(url)) {
            getSomeonesInterests(req, res)
        } else {
            formatResponse(
                res, 
                JSON.stringify('That URL does not exist'), 
                404
            );
        };
    }
});

server.listen(9000, (err) => {
    console.log( err ? err : 'Listening...' )
});