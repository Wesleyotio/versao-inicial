const mongoose = require('mongoose')
mongoose.connect('mongodb://root:secret@mongo/local?authSource=admin', {useNewUrlParser: true })
    .catch(e =>{
        const msg = 'Não foi possivel conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })
