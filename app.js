const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/view'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./router/routeManager')(app);

app.listen(8000);
