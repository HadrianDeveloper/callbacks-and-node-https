const { request } = require('node:https');
const { writeFile } = require('fs')

exports.fetchFile = (path, callback) => {
    const options = {
        hostname: 'nc-leaks.herokuapp.com',
        path: `/api/${path}`,
        method: 'GET'
    };
    request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => {
            body += chunk.toString();
        });
        res.on('end', () => {
            let parsed = JSON.parse(body);
            callback(parsed)
        })
    }).end();
};

exports.saveAsFile = (fileName, contents) => {
    writeFile(fileName, contents, (err) => {
        console.log(err ? err : `${fileName} created!`)
    })
};