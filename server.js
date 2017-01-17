const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const expressLayouts = require('express-ejs-layouts');

app.use(express.static(__dirname + '/public/dist/'))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));

app.use(require('./app/routes'));

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
