const express = require('express');
const app = express();

// Sample user data
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' }
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  
  if (!user) {
    res.status(404).json({ message: 'User not found' })
  } else {
    res.json(user);
  }
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  // Assuming the request body contains the user data
  
  // Generate a unique ID for the new user
  const nextId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  
  // Assign the new ID to the user object
  newUser.id = nextId;
  
  // Add the new user to the array
  users.push(newUser);
  
  res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  // Assuming the request body contains the updated user data
  
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    res.status(404).json({ message: 'User not found' });
  } else {
    // Update the user object with the new data
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    res.json(users[userIndex]);
  }
});

app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    res.status(404).json({ message: 'User not found' });
  } else {
    // Remove the user from the array
    const deletedUser = users.splice(userIndex, 1)[0];
    res.json(deletedUser);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});