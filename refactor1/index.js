
const { fetchFile, saveAsFile, readLocalFile } = require('./utils');

/*
//Fetch all text from API and save to md file
fetchFile(('confidential'), ({instructions}) => {
    saveAsFile(`${__dirname}/instructions.md`, instructions)
});

//Fetch all data from API and save filtered data to json file
fetchFile(('people'), ({people}) => {
    const ncoders = people.filter((u) => u.job.workplace === 'northcoders');
    saveAsFile(`${__dirname}/northcoders.json`, JSON.stringify(ncoders))
});
*/

readLocalFile(('northcoders.json'), ({northcoders}) => {
    const usernames = northcoders.map((u) => u.username);
    const interests = [];

    usernames.forEach((un) => {
        fetchFile(`people/${un}/interests`, ({person}) => {
            interests.push(person);
            if (interests.length === usernames.length) {
                saveAsFile(`${__dirname}/interests.json`, JSON.stringify(interests))
            };
        })
    });
});