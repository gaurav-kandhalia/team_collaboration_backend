
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
    is_active,
    created_at
    from users
    where id = $1
    `;
    const values = [id];
 
    const result = await pool.query(query, values);
    console.log("result",result)
    return result.rows[0] || null;
};

const createUserSession = async ({ userId, hashedRefreshToken, expiresAt, deviceInfo }) => {
    const query = `
    insert into user_session (user_id,hashed_refresh_token,expires_at,device_info,is_revoked)
    values ($1, $2, $3, $4, $5)
    returning *
    `;
    const values = [userId, hashedRefreshToken, expiresAt, deviceInfo, false];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
};

module.exports = {
    findByEmail,
    createUser,
    findById,
    createUserSession
};