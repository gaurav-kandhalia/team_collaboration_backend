// Insert statements 

insert into users (name, email, password) values 
('user1', 'user1@example.com', 'password1');

insert into users (name,email,password) values 
('user2','user2@gmail.com','password2') returning(name,email,id);

insert into users (name,email,password) values 
('userA','userA@gmail.com','passwordA'),
('userB','userB@gmail.com','passwordB'),
('userC','userC@gmail.com','passwordC'),
('userD','userD@gmail.com','passwordD'),
('userE','userE@gmail.com','passwordE')
 returning(name,email,id);


  insert into users (name,email,password) values
 ('userF','userF@gmail.com','passwordF') returning id , name,email;

// if you want to insert a new user and avoid duplicates based on email, you can use the following SQL statement:
 INSERT INTO users (name, email, password)
VALUES (...)
ON CONFLICT (email)
DO NOTHING;

