const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected :)')
}).catch((err) => {
    console.log('Connection failed: ' + err)
})

mongoose.Promise = global.Promise


module.exports = mongoose