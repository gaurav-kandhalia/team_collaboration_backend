const {Pool} = require('pg');


const connectDatabse = async () => {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    })
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

    return pool;
}





module.exports = connectDatabse;