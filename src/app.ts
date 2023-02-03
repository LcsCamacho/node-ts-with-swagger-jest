//imports
import express from 'express'

//app
const app = express();

//get
app.get('/', (req, res) => {
    return res.json({message: 'Hello World'})
});

app.get('/users', (req, res) => {
    let params = req.query;
    return res.send(params)
});

//teste
app.listen(3000, () => {
    console.log('Server running on port 3000')
});