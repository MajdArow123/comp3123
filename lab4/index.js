/*
  COMP3123 - exec04
  - Serve multiple paths from an Express server using routes
  - Serve a static html file
  - Extract GET params (compare with GET query)
*/

const express = require("express")
const app = express()

const SERVER_PORT = process.env.PORT || 3000

// ----------------------- Set up middleware for Express -----------------------
// Serve static files: public/instruction.html -> localhost:3000/instruction.html
app.use(express.static("public"))

// Serve JSON
app.use(express.json())

// Read URL params or queries
// extended: true lets us use the qs library
app.use(express.urlencoded({ extended: true }))
// -----------------------------------------------------------------------------

app.get("/", (request, response) => {
    response.send("<h1>COMP3123 exec04 - Express server</h1>")
})

// GET /hello  -> plain text
app.get("/hello", (request, response) => {
    response.type("text/plain").send("Hello Express JS")
})

// GET /user?firstname=&lastname=   (query parameters)
app.get("/user", (request, response) => {
    console.log(request.query)

    // spec: when the parameters are not provided, fall back to these defaults
    const firstname = request.query.firstname || "Pritesh"
    const lastname = request.query.lastname || "Patel"

    response.json({ firstname, lastname })
})

// POST /user/:firstname/:lastname   (path parameters)
app.post("/user/:firstname/:lastname", (request, response) => {
    console.log(request.params)

    const { firstname, lastname } = request.params

    if (!firstname || !lastname) {
        return response.status(400).json({ error: "You must pass in firstname and lastname" })
    }

    response.json({ firstname, lastname })
})

// POST /users   (body - array of users)
app.post("/users", (request, response) => {
    const users = request.body
    console.log(users)

    if (!Array.isArray(users)) {
        return response.status(400).json({ error: "Body must be an array of users" })
    }

    response.json(users)
})

// -----------------------------------------------------------------------------

app.listen(SERVER_PORT, () => {
    console.log("Server is running on http://localhost:" + SERVER_PORT)
})
