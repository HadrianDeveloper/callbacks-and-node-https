const https = require('https');
const { saveFile } = require('./utils.js');
const { readFile } = require('fs');


function getPets() {

   const pets = [];
   let count = 0;

    readFile('northcoders.json', (err, res) => {
        let usernames = JSON.parse(res);
            usernames = usernames.northcoders.map((u) => u.username)
        usernames.forEach((user) => {
            const options = {
                hostname: 'nc-leaks.herokuapp.com',
                path: `/api/people/${user}/pets`,
                method: 'GET'
            };
            https.request(options, (res) => {
                let body = '';

                res.on('data', (chunk) => {
                    body += chunk.toString()
                });

                res.on('end', () => {
                    const parsed = JSON.parse(body);
                    const extract = parsed.person;
                    if (extract) pets.push(extract)

                    if (++count === usernames.length) {
                        const forFiling = pets.filter((p) => p.pets.length)
                        saveFile('pets.json', JSON.stringify(forFiling))
                    }
                });
            }).end();
        })
    })
};
getPets()


function getInterests() {

    readFile('northcoders.json', (err, res) => {
        const forFiling = [];
        const usernames = JSON.parse(res);
        usernames.northcoders.forEach((u) => {

            const options = {
                hostname: 'nc-leaks.herokuapp.com',
                path: `/api/people/${u.username}/interests`,
                method: 'GET'
            };

            https.request((options), (res) => {
                let body = '';

                res.on('data', (chunk) => {
                    body += chunk.toString();
                });

                res.on('end', () => {
                    const parsed = JSON.parse(body);
                    forFiling.push(parsed.person);
                    if (forFiling.length === usernames.northcoders.length) {
                        saveFile('interests.json', JSON.stringify(forFiling))
                    }
                })
            }).end();
        });
    })
};
getInterests()



function getPeople() {

    const options = {
        hostname: 'nc-leaks.herokuapp.com',
        path: '/api/people',
        method: 'GET'
    };

    const peopleList = https.request(options, (res) => {

        let body = '';

        res.on('data', (chunk) => {
            body += chunk.toString()
        });

        res.on('end', () => {
            body = JSON.parse(body);
            const northcoders = body.people.filter((chap) => chap.job.workplace = 'northcoders');
            saveFile('northcoders.json', JSON.stringify({northcoders}));
        });

    })
    .on('error', (err) => console.log('>>> ' + err))
    .end()
};
getPeople();


function getInstructions() {

    const options = {
        hostname: 'nc-leaks.herokuapp.com', 
        path: '/api/confidential',
        method: 'GET'
    };

    const request = https.request(options, (res) => {      //DOES NOT ACCEPT ERR arg
        let body = '';
        res.on('data', (chunk) => {
             body += chunk.toString()
         });
         res.on('end', () => {
             body = JSON.parse(body);
             saveFile('instructions.md', body.instructions)     //Content must not be in {}
         });                                                    //JSON.stringify if .json file
    })
    .on('error', (err) => console.log('>>> ' + err))    //Needed to report errs in {options}
    .end()
};
getInstructions();
