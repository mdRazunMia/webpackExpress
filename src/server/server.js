const express = require("express")
const path = require("path")

//ES6+import instead of Node's required 

//import path from 'path'
//import express from 'express'

const app = express(), 
            DIST_DIR = __dirname, 
            HTML_FILE = path.join(DIST_DIR,'index.html')

app.use(express.static(DIST_DIR))
app.get('*', (req, res)=>{
    res.sendFile(HTML_FILE)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`App is running to ${PORT}...`)
    console.log('Press Ctrl+C to quit')
})