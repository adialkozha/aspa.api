-- SQLite
--6 Select basketId, user's name, product name, and cost where baskets.UserID=users.Id;
SELECT baskets.BasketId, users.Name, Products.ProductName, Products.ProductCost from Products, Baskets, Users 
WHERE Products.ProductId=Baskets.ProductId 
AND Baskets.UserId=users.Id;
