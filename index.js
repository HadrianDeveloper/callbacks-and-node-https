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

            fs.writeFile('northcoders.json', JSON.stringify(coriander.people), (err) => {
                if (err) console.log('File creation failed!');
                else console.log('Success! File created!')
            })
        });
    });
request.end()
};




function getInterests() {

    const result = [];

    fs.readFile('northcoders.json', (err, usernames) => {
        const parsedUsers = JSON.parse(usernames) // <-- array of objs
            if (err) console.log('ERROR in retrieving usernames')
        
            
        //for each user make a request:
        parsedUsers.forEach(user => {
            const objRequest = {
                hostname: 'nc-leaks.herokuapp.com',
                path: `/api/people/${user.username}/interests`, // <-- username = username [GOOD!]
                method: 'GET'
            };

            const request = https.request(objRequest, (response) => {
                let body = '';

                response.on('data', (packet) => {
                    body += packet.toString();
                });

                response.on('end', () => {
                    const parsedInterest = JSON.parse(body); // <-- output achieved! 
                    result.push(parsedInterest);

                })
            })
            request.end();
        }) // <--END OF FOREACH CODE BLOCK
       
        fs.writeFile('interests.json', JSON.stringify(interests), () => {
            console.log(interests)
            console.log('WELL DONE!!');
            })

    })
};

getInterests()




