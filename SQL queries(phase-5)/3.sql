-- SQLite
--3 Output the address and basketId of Umer Pathan from the table
select orders.Address, Orders.BasketId from users 
JOIN ORDERs ON users.Id= orders.User
JOIN Baskets ON Baskets.basketId = orders.basketId
WHERE Users.Name = 'UMER PATHAN';
