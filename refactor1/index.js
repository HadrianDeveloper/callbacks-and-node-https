
const { fetchFile, saveAsFile } = require('./utils');

fetchFile(('confidential'), ({instructions}) => {
    saveAsFile('instructions.md', instructions)
});

