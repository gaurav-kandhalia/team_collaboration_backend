const pool = require('../config/db.config');

const findByEmail = async (email) => {
  
    const query = `
    select 
    id ,
    name,
    email,
    password,
    is_active
    from users
    where email = $1
    `;
    const values = [email];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
   
}

module.exports = {
    findByEmail
};