-- SQLite
--5 Select basketId, userId, address from orders and baskets tables where address='1006 S Graywell DR'
SELECT Baskets.BasketId, Baskets.UserId, Orders.Address FROM orders, Baskets WHERE
Baskets.basketId = orders.basketId
AND Orders.Address = '1006 S Graywell DR';
