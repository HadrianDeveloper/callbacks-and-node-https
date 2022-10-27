const https = require('https');
const fs = require('fs');


function getInstructions() {

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

        fs.writeFile('instructions.md', parsley.instructions, (err) => {
            if (err) throw err;
            else {
                console.log('success, file created')
            };
        })
    });
}) 
request.end()
};
//getInstructions()



function getPeople() {
    const options = {
        hostname: 'nc-leaks.herokuapp.com',
        path: '/api/people',
        method: 'GET'
    };

    const request = https.request(options, (response) => {
        let body = '';

        response.on('data', (packet) => {
            body += packet.toString();
        });
        
        response.on('end', () => {
            const coriander = JSON.parse(body);
            // ^created the required file of getPeople

            fs.writeFile('northcoders.json', JSON.stringify(coriander.people), (err) => {
                if (err) console.log('File creation failed!');
                else console.log('Success! File created!')
            })
        });


    });
request.end()
};
getPeople()