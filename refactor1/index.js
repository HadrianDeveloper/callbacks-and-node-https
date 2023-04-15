
const { fetchFile, saveAsFile, readLocalFile } = require('./utils');



fetchFile(('confidential'), ({instructions}) => {
    saveAsFile(`${__dirname}/instructions.md`, instructions)
});

fetchFile(('people'), ({people}) => {
    const ncoders = people.filter((u) => u.job.workplace === 'northcoders');
    saveAsFile(`${__dirname}/northcoders.json`, JSON.stringify(ncoders))
});

readLocalFile(('northcoders.json'), ({northcoders}) => {
    const usernames = northcoders.map((u) => u.username);
    const interests = [];
    usernames.forEach((un) => {
        fetchFile(`people/${un}/interests`, ({person}) => {
            interests.push(person);
            if (interests.length === usernames.length) {
                saveAsFile(`${__dirname}/interests.json`, JSON.stringify(interests))
            };
        });
    });
});

readLocalFile(('northcoders.json'), ({northcoders}) => {
    const usernames = northcoders.map((u) => u.username);
    const pets = [];
    let count = 0;
    usernames.forEach((u) => {
        fetchFile(`people/${u}/pets`, ({person}) => {
            if (person) pets.push(person);
            if (++count === usernames.length) {
                saveAsFile(`${__dirname}/pets.json`, JSON.stringify(pets));
            };
        });
    });
});
