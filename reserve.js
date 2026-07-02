app.get(
    "/api/users", (req, res) => {
        // res.send("<h1>Hello World Your express server is running</h1>")
        const users = [{ id: 1, name: "bob" }, { id: 2, name: "elli" }]
        res.json(users)
    }
)