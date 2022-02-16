const mongoose = require('mongoose');

const dbName = 'productManagerDB';
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a conneciton to our database: ${dbName}`))
    .catch(err => console.log('Something went wrong while connecting to our database', err))