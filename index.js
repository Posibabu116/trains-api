const express = require('express');
const app = express();
const trainData = require('./trains.json');

app.get('/api/trains', (req, res) => {
  res.json(trainData);
});

app.get('/api', (req, res) => {
  res.json({success:true});
});

const PORT = 8080;
app.listen(PORT, '192.168.0.12', () => {
  console.log(`Server running on http://192.168.0.12:${PORT}`);
});
