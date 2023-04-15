const { writeFile } = require('fs');

exports.saveFile = (name, content, path) => {
    writeFile(name, content, (err) => {
        err ? console.log(err) : console.log(`${name} saved!`)
    })
};

