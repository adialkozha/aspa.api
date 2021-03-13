-- SQLite
--12 Show the total amount of products in the category 'Electronics'
select Product_Name, Category, count(Category) from Product where Category like 'Electronics%';