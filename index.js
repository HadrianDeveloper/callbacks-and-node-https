const https = require('https');
const fs = require('fs');


const options = {
    hostname: 'nc-leaks.herokuapp.com',
    path: '/api/confidential',
    method: 'GET'
};


const request = https.request(options, (response) => {
    let body = ''; 
        
    response.on('data', (packet) => {
        body += packet.toString()     
    });

    response.on('end', () => {
        const parsley = JSON.parse(body);
        console.log(parsley)

        fs.writeFile('instructions.md', parsley.instructions, (err) => {
            if (err) throw err;
            else {
                console.log('success, file created')
            };
        })
    });
}) 

request.end()
