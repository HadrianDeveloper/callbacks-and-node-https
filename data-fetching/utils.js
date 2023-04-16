const { request } = require('node:https');
const { writeFile, readFile } = require('fs')

exports.fetchFile = (path, callback) => {
    const options = {
        hostname: 'nc-leaks.herokuapp.com',
        path: `/api/${path}`,
        method: 'GET'
    };
    request(options, (res) => {
        let body = '';
        res.on('error', (err) => {
            console.log(err)
        });
        res.on('data', (chunk) => {
            body += chunk.toString();
        });
        res.on('end', () => {
            let parsed = JSON.parse(body);
            callback(parsed)
        });
    }).end();
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