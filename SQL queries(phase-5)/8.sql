-- SQLite
--8 Find members who bought products from the 'Baby products' or 'Toys & Games'  category?
select User.First_Name, User.Last_Name from User, Product  where user.product_id=product.product_id AND
Product.Category LIKE 'Baby products%';