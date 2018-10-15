class Connection {
  static connection(mongoose, logger){
        try {
            
            mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true });
        } catch (error) {
         
        }
        
    }
}

module.exports = Connection;