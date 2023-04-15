
const { fetchFile, saveAsFile, readLocalFile } = require('./utils');

fetchFile(('confidential'), ({instructions}) => {
    saveAsFile('instructions.md', instructions)
});

fetchFile(('people'), ({people}) => {
    const ncoders = people.filter((u) => u.job.workplace === 'northcoders');
    saveAsFile('northcoders.json', JSON.stringify(ncoders))
});

readLocalFile(('northcoders.json'), (list) => {
    const usernames = list.map((u) => u.username);
    const interests = [];
    usernames.forEach((un) => {
        fetchFile(`people/${un}/interests`, ({person}) => {
            interests.push(person);
            if (interests.length === usernames.length) {
                saveAsFile('interests.json', JSON.stringify(interests))
            };
        });
    });
});

readLocalFile(('northcoders.json'), (list) => {
    const usernames = list.map((u) => u.username);
    const pets = [];
    let count = 0;
    usernames.forEach((u) => {
        fetchFile(`people/${u}/pets`, ({person}) => {
            if (person) pets.push(person);
            if (++count === usernames.length) {
                saveAsFile('pets.json', JSON.stringify(pets));
            };
        });
    });
});

