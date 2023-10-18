const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const apiRouterV1 = require('./routes/api/v1');

app.use('/api/v1', apiRouterV1);

app.listen(port, () => console.log('todo api app listening on port ' + port + '!'));