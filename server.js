const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');

// Define middleware here
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
app.use(bodyParser.text({ limit: '200mb' }));

// Define API routes here
require('./routes/router.js')(app)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  console.log("In Production", path.join(__dirname, './front-end/build'))
  app.use(express.static(path.join(__dirname, './front-end/build')));

  app.get('*', (req, res) =>
    { 
      res.sendFile(
        path.resolve(__dirname, './', 'front-end', 'build', 'index.html')
      )
    }
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./tentamus-ecoc/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});