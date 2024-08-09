const express = require('express');
const app = express();
const trainData = require('./trains.json');

app.use(cors());


app.get('/api/trains', (req, res) => {
  res.json(trainData);
});

app.get('/api', (req, res) => {
  res.json({success:true});
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://192.168.0.12:${PORT}`);
});
