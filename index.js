const express = require("express");
const feedControler = require('./app/controllers/feed');
// const feed = require("./app/models/feed");
const app = express();
const PORT = 8000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send("API is Already Running Forever!")
})

// menampilkan list mobil
app.get('/feeds', feedControler.list)
// menampilkan list mobil berdasarkan id
app.get('/feeds/:id',feedControler.findAndSetById, feedControler.detail)

//delete
app.delete('/feeds/:id', feedControler.findAndSetById, feedControler.destroy)


// tambah data
app.post('/feeds', feedControler.create);
// update
app.put('/feeds/:id',feedControler.findAndSetById, feedControler.update)
app.listen(PORT,()=>console.log('listening on http://local'))   