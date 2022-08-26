const reader=require("./reader")
const express = require('express')
const axios=require("axios")
const app = express()
const port = 3000

const users=reader("user.json")


app.get("/", async (req, res, next) => {

    axios.get("https://jsonplaceholder.typicode.com/photos")
           .then(data => res.status(200).send(data.data))
           .catch(err => res.status(404).send(err));
 
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
