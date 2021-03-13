-- SQLite
--1 Can the user have an account and be sure that the password will remain confidential?
select user_id, password from user; --encryption of the password will be implemented in bcrypt, then recorded in the user's table. 
