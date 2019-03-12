class Connection {
    static connection(mongoose, logger){

        const connection = {
            "env": {
                "MONGO_USER": "earthworm",
                "MONGO_PASSWORD": "earthworm_p%40ss87",
                "MONGO_DB": "cooking-corner"
            }
        };

        const MONGO_USER = encodeURIComponent(connection.env.MONGO_USER);
        const MONGO_PASSWORD = encodeURIComponent(connection.env.MONGO_PASSWORD);
        const MONGO_DB = encodeURIComponent(connection.env.MONGO_DB);

        mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster-virgo-8ntfm.mongodb.net/${MONGO_DB}?retryWrites=true`, { useNewUrlParser: true })
            .then(() => {
                console.log('Succesfully connected to the database.')
            })
            .catch(err => {
                console.log('Could not connect to the database.', err);
            });        
    }
}

module.exports = Connection;