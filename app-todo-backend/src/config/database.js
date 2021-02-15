const mongoose = require('mongoose');

const MONGO_USERNAME = process.env.MONGO_USERNAME || "root";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "root123456";
const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || "192.168.0.18";
const MONGO_PORT = process.env.MONGO_PORT || "27017";
const MONGO_DB = process.env.MONGO_DB || "db_todo";

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    connectTimeoutMS: 10000,
    user: MONGO_USERNAME,
    pass: MONGO_PASSWORD
};

const url_conn = 'mongodb://'+MONGO_HOSTNAME+':'+MONGO_PORT+'/'+MONGO_DB+'?authSource=admin';
module.exports = mongoose.connect(url_conn, options).then(function() {
    console.log('MongoDB ['+MONGO_DB+'] conectado.');
});