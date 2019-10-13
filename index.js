const app = require('express')()
const PORT = 5000

app.get('/', function(req, res) {
    res.send('<h1>Hello, world</h1>')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})