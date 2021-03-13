-- SQLite
--6 What is the average rating of a specific good in the list of the products?
select ProductReview.Product_id as 'ID', Product.Product_Name as 'product', avg(ProductReview.Rating) as 'avg rating' 
from ProductReview JOIN Product on Product.Uniq_Id=ProductReview.Product_id 
where Product.Product_Name='specific product name'