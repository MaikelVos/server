const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/' , (req, res) => {
    res.json({'msg': 'hello you all'})

});

app.listen(port, () => {
    console.log('server is ready test ')
});
