const express= require('express');
const app= express();

// Middleware for parsing JSON
app.use(express.json());

let users= [
    {id: 1, name: 'John Doe', email: 'john@example.com'},
    {id: 2, name: 'Jane Smith', email: 'jane@example.com'}
];

// GET = retieve all users
app.get('/api/users', (req, res)=> {
    res.json(users);
});

// GET= retieve a specific user
app.get('/api/users/:id', (req, res)=>{
    const user= users.find(u=> u.id === parseInt(req.params.id));
    if(!user) return req.statusCode(404).json({message: 'User not found'});
    req.json(user);
});

// POST= create a new user
app.post('/api/users', (req,res)=>{
    const newUser={
        id: users.length+1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT= update a user completely
app.put('/api/users/:id', (req, res) =>{
    const user= users.find(u=> u.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({message: 'User not found'});

    user.name= req.body.name;
    user.email= req.body.email;

    res.json(user);
});

// DELETE= remove a user
app.delete('/api/users/:id', (req, res)=>{
    const userIndex= users.findIndex(u=> u.id === parseInt(req.params.id));
    if(userIndex === -1) return res.status(404).json({message: 'User not found'});

    const deletedUser= users.splice(userIndex, 1);
    res.json(deletedUser[0]);
});

app.listen(8080, () =>{
    console.log('REST API is running on port 8080');
});
