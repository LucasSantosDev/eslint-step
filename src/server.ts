import util from "util"
import express from "express"

const debug = util.debuglog("myApp")

const app = express()
const port = 3078

app.listen(port, () => {
  debug(`Listening on port ${port}`)
})
