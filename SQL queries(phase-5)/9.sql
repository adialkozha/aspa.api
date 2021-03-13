-- SQLite
--9 Find members who didn't buy products from the 'Toys & Games'  category?
select User.First_Name, User.Last_Name from User, Product  where user.product_id=product.product_id AND
NOT Product.Category LIKE 'Toys & Games%';
