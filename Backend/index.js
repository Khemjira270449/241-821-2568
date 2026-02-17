const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000
app.user(bodyParser.json());
let user = []
let counter = 1;
//path = GET /user
app.get('/user', (req, res) => {
    res.json(user);
});


//Path = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    conter += 1;
    user.id = counter
    counter += 1;
    user.push(user);
    res.json({
        massage: 'User added successfully',
        user: user });
})

//path = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.params.id;
    //user จาก id ที่ส่งมา
    let seletedIndex = user.findIndex(user => user.id == id);
    
    //อัพเดทข้อมูล user
    if (updateUser.name) {
    user[seletedIndex].name = updateUser.name || user[seletedIndex].name;
    }
    if (updateUser.email) {
        user[seletedIndex].email = updateUser.gmail || user[seletedIndex].email;
    }
    //เอาข้อมูลที่ update ส่ง response  กลับไป
    res.json({
        message: 'User updated successfully',
        data: {
            user: updateUser,
            indexUpdated: seletedIndex
        }
    });
})

//path = DELETE /user /:id
app.delete('user/:id', (req, res) => {
    let id = req.params.id;
    //หา index ของ user ที่ต้องการลบจาก id ที่ส่งมา
    let seletedIndex = user.findLastIndex(user => user.id == id);
    //ลบ user จาก arry โดยใช้ delete
    user.splice(seletedIndex, 1);

    res.json ({
        massage: 'Usre deleted successfully',
            indexed: seletedIndex
    });

})

app.listen(port, () => {
    console.log('Server is running on port ${port}')
});