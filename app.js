import express from "express"
import { db } from "./db.js"
let app = express()
let PORT = 1234
app.use(express.json())

app.get(
    "/users", (req, res) => {
        db.query("SELECT * FROM users", (err, result) => {
            if (err) {
                // return res.send("DB Error")
                return res.status(500).json({ error: "Database error" })
            }
            // res.send("Nice Db is working correctly ")
            res.json(result)
        })
    }
)


app.post(
    "/users", (req, res) => {
        const { name, age } = req.body
        const sql = 'INSERT INTO users (name,age) values (?,?)'
        db.query(sql, [name, age], (err, result) => {
            if (err) {
                throw err
            }
            res.json({
                message: " Congrats User is added successfully",
                id: result.insertId
            })
        }
        )
    }
)


app.put(
    '/users/:id', (req, res) => {
        const { name, age } = req.body
        const sql = 'UPDATE users SET name = ?, age = ? WHERE id = ?'
        const { id } = req.params
        db.query(sql, [name, age, id], err => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({
                message: "You updated user"
            })
        })

    }
)

app.delete(
    '/users/:id', (req, res) => {
        const { id } = req.params

        db.query(
            'DELETE FROM users WHERE id = ?', [id], err => {
                if (err) {
                    return res.status(500).json({ error: err.message })
                }
                res.json({ message: 'user deleted successfully' })
            }
        )
    }
)
app.listen(
    PORT, function (err) {
        if (err) {
            console.log(err)
        }
        console.log(`server is listening at http://localhost:${PORT}`)
    }
)       