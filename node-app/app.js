const express = require('express');
const app = express();
const apiRoute = require('./routes/api');

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

