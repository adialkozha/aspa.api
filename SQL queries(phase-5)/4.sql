-- SQLite
--4 What if the customer is not sure about the purchase and wants to see what he is paying for?
select Cart.user_id as 'customer', CartItem.Product_ID from Cart JOIN CartItem on Cart.Cart_id = CartItem.Cart_ID 
where Cart.User_id= 'specific user_id';