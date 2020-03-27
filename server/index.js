const express = require('express');

const {getDoodles, postDoodles, updateDoodles, removeDoodles} = require('./Controllers/doodleController')
const app = express();
app.use(express.json());

app.get('/api/doodle-tails', getDoodles);
app.post('/api/doodle-tails', postDoodles);
app.put('/api/doodle-tails/:id', updateDoodles);
app.delete('/api/doodle-tails/:id', removeDoodles);

const PORT = 4000
app.listen(PORT,() => console.log (`Skynet is running on PORT ${PORT}`))
