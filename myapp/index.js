const http = require('http');
const express = require('express');
const qs = require('querystring');

const app = express();

const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.set('Content-Type', 'application/json');
});
