
const pool = require('../config/db');

const createUserSession = async({
    userId,
    hashedRefreshToken,
    expiresAt,
    deviceInfo})=>{
    const query = `
    insert into user_session (
    user_id,
    hashed_refresh_token
    ,expires_at,
    device_info
    )
    values ($1,$2,$3,$4)
    `;
    const values = [userId,hashedRefreshToken,expiresAt,deviceInfo];
    
         await pool.query(query, values);
        
   

};

module.exports = {
    createUserSession
};  
