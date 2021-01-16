const mongoose = require('mongoose');

mongoose
    .connect("mongodb+srv://jcieszynska:zaq12WSX@cluster0.mvpto.mongodb.net/employees?retryWrites=true&w=majority",
    {useNewUrlParser: true})
    .catch(e => {
        console.error("Connection error", e.message);
    })

const db = mongoose.connection
module.exports = db