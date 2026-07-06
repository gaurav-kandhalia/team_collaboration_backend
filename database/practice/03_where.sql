

select id , name , email from users where is_active = true;

-- login

select id , name, email , password from users where email = 'userA@example.com' and is_active = true;

select id , task_name,priority from users where project_id = 3 and status = 'pending';

select id,task_name,priority from tasks where user_id = 5 and status  = 'pending'

select task_name, assigned_to , priority from tasks where project_id = 3 and status = 'pending' and assigned_to = 5 and priority = 'high';

select task_name , priority,status from tasks where status = 'pending' or priority = 'high'

select task_name where status in ('pending','in progress')