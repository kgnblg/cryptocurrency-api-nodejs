const request = require('request');
module.exports.index = function (req, res) {
    request({
        url: 'https://api.coinmarketcap.com/v1/ticker/',
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            res.render('home', {data: body});
        }
    });
}