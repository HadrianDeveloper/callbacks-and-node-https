const { writeFile, readFile } = require('fs');
const superagent = require('superagent');

exports.fetchFile = (path, callback) => {
    superagent
        .get(`nc-leaks.herokuapp.com/api/${path}`)
        .end((err, {text}) => {
            if (err) callback({ person: null})
            else {
                const parsed = JSON.parse(text);
                callback(parsed);
            }
        })
};

exports.saveAsFile = (fileName, contents) => {
    writeFile(`${__dirname}/${fileName}`, contents, (err) => {
        console.log(err ? err : `${fileName} created!`)
    })
};

exports.readLocalFile = (file, callback) => {
    readFile(file, (err, res) => {
        const parsed = JSON.parse(res);
        err ? console.log(err) : callback(parsed)
    })
};