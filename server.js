const express = require('express');

const port = 8080 || process.env.PORT;

const app = express();

app.get('/hello' , (req, res) => {
    res.json({'msg': 'hello you all'})

});

app.listen(port, () => {
    console.log('server is ready test ')
});
