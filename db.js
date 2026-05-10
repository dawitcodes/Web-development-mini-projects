import mysql from "mysql2"

export let db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "DDAMYSQL",
        database: "myapp"
    }
)
db.connect(
    err => {
        if (err) {
            console.log("error")
        }
        else {
            console.log("Connected to db successfully")
        }
    }
)

