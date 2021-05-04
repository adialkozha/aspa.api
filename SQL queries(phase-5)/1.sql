-- SQLite
--1 How can we output the the list of Products by userId? 
SELECT Baskets.UserId, Products.ProductName 
FROM Baskets JOIN Products
ON baskets.productId=products.productId 
WHERE Baskets.UserId='28a4a9aa9bd3640e1f9a9cf542cb25fd'; 
