const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

/*app.use(
    express.urlencoded({
      extended: true,
    }),
);*/

mongoose
  .connect('mongodb://localhost:27017/simplecoca', { useNewUrlParser: true })
  .then(() => {

    //console.log('Conectou ao banco!');
    const app = express();
    app.use(express.json());
    app.use('/api', routes);

    /*app.get("/", (req, res) => {
        res.json({ message: "Oi Express!" });
    });*/

    app.listen(8000, () => {
        console.log("Servidor iniciado!");
    });

  })
  .catch((err) => console.log(err));
