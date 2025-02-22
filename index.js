const express = require('express');
const app = express();
const { User } = require('./models');

app.use(express.json());

app.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
})

app.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const deletedUser = await User.destroy({
        where: {
            id: id
        }
    })
    res.json(deletedUser);
})


app.put('/:id', async (req, res) => {
    const id = req.params.id;

    const updatedUser = await User.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }, {
        where: {
            id: id
        }
    })

    res.json(updatedUser);
})





app.post('/', async (req, res) => {
    // console.log(req.body)

    const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })


    res.json(newUser);
})

app.listen(3001, (req, res) => {
    console.log('Server is running on port http://localhost:3001');
});