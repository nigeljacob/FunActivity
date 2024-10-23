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
const userData = null

app.get('/', (req, res) => {
    res.render('home', userData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
