const mongoose = require('mongoose');

mongoose
    .connect("mongodb+srv://login:password@cluster0.mvpto.mongodb.net/employees?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(e => {
        console.error("Connection error", e.message);
    })

const db = mongoose.connection
module.exports = db
