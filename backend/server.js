import app from './api/app.js';

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is Running on http://localhost:${port}`));


