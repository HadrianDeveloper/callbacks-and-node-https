const { getNorthcoders, getIndividual, getSomeonesPets, getSomeonesInterests } = require('./controllers.js');
const http = require('http');

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
            console.log('That endpoint does not exist yet')
        }
    }
});

server.listen(9000, (err) => {
    console.log( err ? err : 'Listening...' )
});



