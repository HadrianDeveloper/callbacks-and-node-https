
exports.formatResponse = (res, data, code) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = code || 200;
    res.write(data);
    res.end();
};

exports.getEndpoint = (url, fromChar) => {
    return url.substring(fromChar);
};

exports.parseFilterString = (arr, username, cb) => {
    const parsedArr = JSON.parse(arr)
    const target = parsedArr.filter((u) => u.username === username)
    cb(JSON.stringify(target));
};

