const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {

    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        return res.json(data)

    } catch (error) {
        console.error(error)
    }

})

app.listen('4567')