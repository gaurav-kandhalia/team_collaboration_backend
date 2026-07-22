const {Pool} = require('pg');

 const pool = new Pool({
        connectionString: process.env.DB_URL,
    })
const connectDatabse = async () => {
    
 
    let connection;

    try {
        connection = await pool.connect();
      
       
    }catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }finally {
       if (connection) {
            connection.release();
        }
    }


}





module.exports = {connectDatabse,pool};