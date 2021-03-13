-- SQLite

--2  Can we filter the goods by the rating of the product?
Select Product.product_name as 'popular product', ProductReview.Rating 
from Product, ProductReview WHERE Product.Uniq_Id = ProductReview.Product_id GROUP BY Product.product_name, ProductReview.Rating ORDER BY ProductReview.Rating; 
