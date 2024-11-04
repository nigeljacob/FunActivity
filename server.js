const express = require('express');
const { engine } = require('express-handlebars'); // Updated import

const app = express();
const PORT = 3000;

// Set up Handlebars engine
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Serve static files (CSS)
app.use(express.static('public'));

// JSON data
const userData =  {
    name: "Tom",
    age: 20,
    message: "Hello World",
    hobbies: [
        "hobby 1",
        "hobby 2",
        "hobby 3",
    ],
    contact: {
        email: "tom@gmail.com",
        phone: "1234567890"
    }
}

app.get('/', (req, res) => {
    res.render('home', userData);
});

app.get('/hello', (req, res) => {
    res.send('Hello User!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
