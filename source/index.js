const express = require('express')
const env = require('env-cmd')
require('./db/mongoose')
const userRouter = require('./routers/user.routers')
const taskRouter = require('./routers/task.routers')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
	console.log(`Server is up on port ${port}`)
})
