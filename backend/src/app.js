/*
 * @Author: 赵恩来
 * @Date: 2025-02-08 10:02:55
 * @LastEditors: 赵恩来
 * @LastEditTime: 2025-02-08 10:25:37
 * @Description:
 */
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
	res.json({ message: "Hello from Node.js!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

const db = require('./db');

app.get('/api/users', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});