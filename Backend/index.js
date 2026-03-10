const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const e = require('express');
const app = express();
const cors = require('cors');
const port = 8000

app.use(bodyParser.json());
app.use(cors());

let users = []
let counter = 1 ;
let conn = null

const initDBConnection = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8821
    })
}

//path = GET /users สำหรับ get ข้อมูล user ทั้งหมด
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
})
const validateData = () => {
    let errors = [];
    if (!userData.firstName) {
        errors.push('กรุณากรอกชื่อ');
    }
    if (!userData.firstName) {
        errors.push('กรุณากรอกนามสกุล');
    }
    if (!userData.firstName) {
        errors.push('กรุณากรอกอายุ');
    }
    if (!userData.firstName) {
        errors.push('กรุณากรอกเพศ');
    }
    if (!userData.firstName) {
        errors.push('กรุณาเลือกความสนใจอย่างน้อย 1 อย่าง');
    }
    if (!userData.firstName) {
        errors.push('กรุณากรอกคำอธิบายเกี่ยวกับตัวคุณ');
    }
    return errors;
}

// path = POST /users สำหรับเพิ่ม user ใหม่
app.post('/users', async (req, res) => {
    try {
        let user = req.body;
        const errors = validateData(user);
        if (errors.length > 0 ) {
            //ถ้ามี error
            throw {
                message: 'กรอกข้อมูลไม่ครบ',
                errors: errors
            }
        }
        const results = await conn.query('INSERT INTO users SET ?', user);
        console.log('results:', results);
        res.json({
            message: 'User created successfully',
            data: results[0]
        })

    } catch (error) {
        const errorMessage = error.message || 'Enetr creating user';
        const errors = error.error || [];
        console.error('Enter creating user:',error.message);
        res.status(500).json({
            message: errorMessage,
            errors: errors
        });
    }
});

//path GET /user/:id สำหรับ get ข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id)
        if (results[0].length == 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json(results[0]);
    }
    catch (error) {
        console.error('Enter fetching user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Enter fetching user',
            error: error.message
        });
    }
})

//PUT /user/:id สำหรับแก้ไขข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        let updatedUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id])
        if (results[0].affectedRows == 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json({
            message: 'User updated successfully',
            data: updatedUser
        });
    }
    catch (error) {
        console.error('Error fetching user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error updating user',
            error: error.message
        });
    }
})

//DELETE /user/:id สำหรับลบข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        const results = await conn.query('DELETE FROM users WHERE id = ?', id)
        if (results[0].affectedRows == 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json({
            message: 'User delete successfully ' + id
        });
    }
    catch (error) {
        console.error('Error deleting user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error deleting user',
            error: error.message
        });
    }
})


app.listen(port, async () => {
    await initDBConnection();
    console.log(`Server is running on port ${port}`)
});