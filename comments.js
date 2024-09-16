// Create web server
const express = require("express")
const app = express()

// create a route
app.get("/comments", (req, res) => {
  // send response
  res.send("Comments Page")
})

// listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
