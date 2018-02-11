const homeRoute = require('./homeRoutes');
const currRoute = require('./currencyRoutes');

module.exports = (app) => {
    app.use('/', homeRoute);
    app.use('/currency', currRoute);
}