const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const api = require('./routes') 
const app = express()  //instance of express
const path = require('path')


app.use(cors())
app.use(bodyParser.json())  //to handle json data
app.use('/api', api)


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res) =>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.get('/',function(req,res){
    res.send('Hello from server')
})

app.listen(PORT, () => {
    console.log(`Server listening on the port::${PORT}`);
});
