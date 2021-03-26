const mongoose = require('mongoose');

const dbconnection = async() => {

    try {

        await mongoose.connect(process.env.DB_CNN, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB online');
    }

    catch (error) {
        console.log(error);
        throw new Error("No se pudo conectar con bbdd");
    }
    
}

module.exports = {
    dbconnection
}
