const express = require('express')
const app = express()
const port= process.env.PORT || 4000

app.get('/', (req, res) => {
        res.send('Asalam-o-Alykum!!!')
})

app.listen(port, ()  => {
        console.log(`Example app listening at http://localhost:${port}`)
})

