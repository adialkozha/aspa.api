-- SQLite

--2  Identify user by address
SELECT UserId
FROM Products 
JOIN Baskets ON products.productId=baskets.productId
JOIN orders ON baskets.basketId=orders.basketId
WHERE Orders.Address = '4307 E Chadwick CT'; --2 tuples
