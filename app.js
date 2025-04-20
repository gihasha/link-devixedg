const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Example backend route to handle pair
app.post('/pair', (req, res) => {
    const { number } = req.body;
    
    if (!number) {
        return res.status(400).send('Phone number is missing.');
    }

    // Logic for pairing code generation (you can customize it)
    const pairCode = generatePairCode(number);  // Custom function to generate pairing code

    res.json({
        success: true,
        pairCode,  // Sending back pairing code if needed
    });
});

// Example function to generate pair code (you can customize it)
function generatePairCode(number) {
    return `P-${Math.floor(Math.random() * 1000000)}`;
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
