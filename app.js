const { response } = require("express")
const express =  require("express")
const { request } = require("http")
 const app = express()

 app.get("/", (request, response) => {
    response.send("Hola mundo")
 }) 

 app.listen(3005, () => {
    console.log("servidor activo")
 })