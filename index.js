const express = require('express')
const app = express()
const port = 3000
const nodeEnv = process.env.NODE_ENV || 'development'

app.get('/', (req, res) => {
  res.send({
    status : 'OK',
    nodeEnv
  })
})

app.listen(port, '0.0.0.0');