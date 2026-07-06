
select * from users ;

select id , name ,email from users;

select id , name , email from users where is_active = true;

select id , name , email from users order by created_at desc;

select task_name , priority from tasks where status = 'pending' order by created_at desc;

node js & sql

const {email} = req.body;

const query = 'SELECT * FROM users WHERE email = $1';

const result  = await pool.query(query, [email]);