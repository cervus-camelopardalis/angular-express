const express = require('express');
const app = express();
const cors = require('cors');

/* Middleware */
app.use(cors());
app.use(express.json()); /* Parse requests of content-type - application/json */
app.use(express.urlencoded({ extended: true })); /* Parse requests of content-type - application/x-www-form-urlencoded */

/* Routes */
/* Check if server works --> Chrome: http://localhost:5000/ */
app.get('/', (req, res) => {
  res.send('Server works.');
});

/* Set port and listen for requests */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});