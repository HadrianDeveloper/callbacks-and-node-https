const { getNorthcoders, getIndividual } = require('./controllers.js');
const http = require('http');

const server = http.createServer((req, res) => {
    const {method, url} = req;
    if (method === 'GET') {

        switch (url) {
            case '/api':
                console.log('Greetings!');
                break;
            case '/api/northcoders':
                getNorthcoders(req, res);
                break;
            case '/api/northcoders/':
                getIndividual(req, res);
                break;
            default:
                console.log('Have not created that endpoint yet!')
        };
    }
});

server.listen(9000, (err) => {
    console.log( err ? err : 'Listening...' )
});



