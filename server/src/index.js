const express = require('express')
const app = express()
const { PORT } = require('./constants')

//Initialize middlewares
app.use(express.json())

//Import routes
const authRoutes = require('./routes/auth')

//Initialize routes
app.use('/api', authRoutes)

//Starts application
const appStart = () => {
    try{
        app.listen(PORT, () => {
            console.log(`The app is currently running at: http://localhost:${PORT}`)
        })
    }catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

appStart()
