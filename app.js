const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Home Route >> CICD pipelined !')
})

app.listen(port, () => {
    console.log(`Application is listening at port http://localhost:${port}`)
})