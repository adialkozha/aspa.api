-- SQLite
--3 What if the product is popular enough and there are too many search results? 
select product.product_name as 'product', ProductCategory.Category_id 'specified category'
FROM Product 
JOIN ProductCategory on Product.Uniq_Id = ProductCategory.Product_id 
JOIN Category ON ProductCategory.Category_id= Category.Category_id
where Category.Title = 'any specified subcategory' 
GROUP BY product.product_name, ProductCategory.Category_id ORDER BY ProductCategory.Category_id;
