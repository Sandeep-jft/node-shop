const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:fase}));

const main = async ()=>{
    app.listen(PORT,()=>{
        console.info(`App is running on http://localhost:${PORT}`)
    })
}

main();