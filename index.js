const express = require('express');
const birds = require('./birds');
const path = require("node:path");
const app = express();

const server = app.listen(3000, () => {
    console.log(`The application has started listening on port ${server.address().port}.`);
    console.log(`The __dirname variable is: ${__dirname} and __filename is: ${__filename}.`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use('/birds', birds);

app.get('/', (req, res) => {
         res.render("home");
});

app.get('/about', (req, res) => {
         res.render("about");
})