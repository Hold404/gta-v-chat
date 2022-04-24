const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 8080;

const commands = ['/me', '/do', '/ame', '/stats']


app.use(cors());

app.get('/api/v1/chat_api/commands', (req, res) => {
  res.send(commands);
});

app.listen(PORT);