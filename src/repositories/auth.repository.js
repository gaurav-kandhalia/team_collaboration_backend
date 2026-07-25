
const {pool} = require('../config/db');

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

const createUser = async ({ name, email, password }) => {
    const query = `
    insert into users 
    (name,
    email,
    password)
    values ($1, $2, $3)
    returning id, name, email, is_active
    `;
    const values = [name, email, password];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
};


const findById = async (id) => {
    const query = `
    select
    id ,
    name,
    email,
    is_active
    from users
    where id = $1
    `;
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
};

module.exports = {
    findByEmail,
    createUser,
    findById
};