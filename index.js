require('dotenv').config()
const app = require('./app')
const port = process.env

app.listen(port, () => {
    console.log(`Fruit API listening on port ${port}`);
})