"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

require("./utils/db");

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const graphqlHTTP = require('express-graphql');

_dotenv2.default.config(); // Create an express server


const app = (0, _express2.default)(); // Parse incoming requests data

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: false
}));
app.use((0, _cors2.default)());
app.use('/graphql', graphqlHTTP({
  schema: _schema2.default,
  graphiql: true
}));

const http = require('http').createServer(app);

http.listen(3000, () => {
  console.log('listening on *:3000'); //MongoClient.connect('mongodb://localhost:27017/anaest', { useUnifiedTopology: true }, function (err, client) {
  //  if (err) throw err;
  //  db = client.db('anaest');
  //});
});