const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Menyediakan file statis (seperti index.html)
app.use(express.static(path.join(__dirname, 'public_folder')));

app.listen(PORT, () => {
    console.log(`Server aktif di port ${PORT}`);
});
