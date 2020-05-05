import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import cors from 'cors';
const graphqlHTTP = require('express-graphql');

import './utils/db';
import schema from './schema';

dotenv.config();

// Create an express server
const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);

const http = require('http').createServer(app);

http.listen(3000, () => {
  console.log('listening on *:3000');
  //MongoClient.connect('mongodb://localhost:27017/anaest', { useUnifiedTopology: true }, function (err, client) {
  //  if (err) throw err;
  //  db = client.db('anaest');
  //});
});
