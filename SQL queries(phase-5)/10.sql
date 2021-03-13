-- SQLite
--10 The vendedor wants to change the category of Toys & Games to baby products.
UPDATE Product set category = 'Baby products' where Category like 'Toys & Games%';
UPDATE Category set Title = 'Baby products' where Title like 'Toys & Games%';