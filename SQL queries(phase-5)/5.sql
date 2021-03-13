-- SQLite
--5 If the client can not decide between the products, what can the site offer?
select CartItem.Product_ID from  CartItem 
JOIN Cart on Cart.Cart_id= CartItem.Cart_ID
JOIN user on cart.user_id = user.user_id
where User.user_id = cart.user_id;