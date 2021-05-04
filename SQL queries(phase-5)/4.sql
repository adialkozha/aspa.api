-- SQLite
--4 select basket id and address of certain user
SELECT Orders.BasketId, Orders.Address FROM orders, users WHERE orders.user=users.id 
AND users.id='00e872ca2fc94e59982286e69f186e0e';
