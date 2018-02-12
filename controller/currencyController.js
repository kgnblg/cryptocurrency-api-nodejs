const express = require('express');
const request = require('request');
module.exports.index = function (req, res) {
    request({
        url: 'https://api.coinmarketcap.com/v1/ticker/'+ req.body.currency,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            console.log(body);
            res.render('currency', { data: body[0] });
        }
    });
}